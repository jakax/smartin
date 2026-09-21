import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

vi.mock("@/components/FadeIn", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const fetchMock = vi.fn();

async function fillAndSubmit() {
  const user = userEvent.setup();
  await user.type(screen.getByPlaceholderText("Your name"), "Ana");
  await user.type(screen.getByPlaceholderText("you@example.com"), "ana@example.com");
  await user.type(screen.getByPlaceholderText(/Who you are/), "Hi");
  await user.click(screen.getByRole("button", { name: /send message/i }));
}

beforeEach(() => vi.stubGlobal("fetch", fetchMock));
afterEach(() => {
  fetchMock.mockReset();
  vi.unstubAllGlobals();
});

describe("Contact form", () => {
  it("posts the form data and shows the success message", async () => {
    fetchMock.mockResolvedValue({ ok: true });
    render(<Contact />);
    await fillAndSubmit();

    expect(await screen.findByText("Message received")).toBeInTheDocument();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/api/contact");
    expect(JSON.parse(init.body)).toEqual({
      name: "Ana",
      email: "ana@example.com",
      context: "Hi",
      website: "",
    });
  });

  it("shows an error and keeps the form when the request fails", async () => {
    fetchMock.mockResolvedValue({ ok: false });
    render(<Contact />);
    await fillAndSubmit();

    expect(await screen.findByText(/Something went wrong/)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole("button", { name: /send message/i })).toBeEnabled());
  });

  it("shows an error when the network throws", async () => {
    fetchMock.mockRejectedValue(new Error("offline"));
    render(<Contact />);
    await fillAndSubmit();
    expect(await screen.findByText(/Something went wrong/)).toBeInTheDocument();
  });
});
