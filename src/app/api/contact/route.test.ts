// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from "vitest";

const send = vi.fn();
vi.mock("resend", () => ({
  Resend: class {
    emails = { send };
  },
}));

const valid = { name: "Ana", email: "ana@example.com", context: "Hello there" };
let ipCounter = 0;

function post(body: unknown, ip = `10.0.0.${++ipCounter}`) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "x-forwarded-for": ip, "content-type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

async function loadRoute() {
  vi.resetModules();
  return import("./route");
}

beforeEach(() => {
  send.mockReset().mockResolvedValue({ data: { id: "1" }, error: null });
  vi.stubEnv("RESEND_API_KEY", "re_test");
  vi.stubEnv("CONTACT_TO_EMAIL", "");
  vi.spyOn(console, "error").mockImplementation(() => {});
});

describe("POST /api/contact", () => {
  it("sends the email and returns success", async () => {
    const { POST } = await loadRoute();
    const res = await POST(post(valid));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });
    expect(send).toHaveBeenCalledTimes(1);
    expect(send.mock.calls[0][0]).toMatchObject({ replyTo: "ana@example.com" });
  });

  it("escapes HTML in every user-supplied field", async () => {
    const { POST } = await loadRoute();
    await POST(post({ name: "<b>x</b>", email: "a@b.co", context: "<script>alert(1)</script>\nline2" }));
    const { html } = send.mock.calls[0][0];
    expect(html).not.toContain("<script>");
    expect(html).not.toContain("<b>x</b>");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("<br />");
  });

  it("returns 400 for a non-JSON body", async () => {
    const { POST } = await loadRoute();
    expect((await POST(post("not json"))).status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it.each([
    ["missing name", { ...valid, name: "" }],
    ["whitespace-only context", { ...valid, context: "   " }],
    ["invalid email", { ...valid, email: "nope" }],
    ["non-string field", { ...valid, name: 42 }],
    ["newline in name", { ...valid, name: "a\nb" }],
    ["oversized context", { ...valid, context: "x".repeat(5001) }],
  ])("returns 400 for %s", async (_label, body) => {
    const { POST } = await loadRoute();
    expect((await POST(post(body))).status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("silently accepts but does not send when the honeypot is filled", async () => {
    const { POST } = await loadRoute();
    const res = await POST(post({ ...valid, website: "http://spam" }));
    expect(res.status).toBe(200);
    expect(send).not.toHaveBeenCalled();
  });

  it("rate limits after 5 requests from the same IP", async () => {
    const { POST } = await loadRoute();
    const statuses: number[] = [];
    for (let i = 0; i < 6; i++) statuses.push((await POST(post(valid, "9.9.9.9"))).status);
    expect(statuses).toEqual([200, 200, 200, 200, 200, 429]);
    expect((await POST(post(valid, "8.8.8.8"))).status).toBe(200);
  });

  it("returns 500 when RESEND_API_KEY is missing", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const { POST } = await loadRoute();
    expect((await POST(post(valid))).status).toBe(500);
    expect(send).not.toHaveBeenCalled();
  });

  it("returns 500 when Resend reports an error", async () => {
    send.mockResolvedValue({ data: null, error: { message: "boom" } });
    const { POST } = await loadRoute();
    expect((await POST(post(valid))).status).toBe(500);
  });

  it("returns 500 when Resend throws", async () => {
    send.mockRejectedValue(new Error("network"));
    const { POST } = await loadRoute();
    expect((await POST(post(valid))).status).toBe(500);
  });

  it("uses CONTACT_TO_EMAIL when set", async () => {
    vi.stubEnv("CONTACT_TO_EMAIL", "me@example.com");
    const { POST } = await loadRoute();
    await POST(post(valid));
    expect(send.mock.calls[0][0].to).toEqual(["me@example.com"]);
  });
});
