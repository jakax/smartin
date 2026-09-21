import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { PORTFOLIO_ITEMS, FAQ_ITEMS, NAV_LINKS } from "./content";

describe("PORTFOLIO_ITEMS", () => {
  it("has unique titles (used as React keys)", () => {
    const titles = PORTFOLIO_ITEMS.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it.each(PORTFOLIO_ITEMS.map((p) => [p.title, p] as const))(
    "%s has complete data",
    (_title, item) => {
      expect(item.desc.length).toBeGreaterThan(0);
      expect(item.tags.length).toBeGreaterThan(0);
      expect(item.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  );

  it("every screenshot exists in /public", () => {
    for (const item of PORTFOLIO_ITEMS) {
      for (const s of item.screens) {
        expect(existsSync(path.join(process.cwd(), "public", s.src)), s.src).toBe(true);
      }
    }
  });

  it("external links are absolute https URLs", () => {
    for (const item of PORTFOLIO_ITEMS) {
      for (const l of item.links ?? []) {
        expect(l.href, `${item.title}: ${l.label}`).toMatch(/^https:\/\//);
      }
    }
  });

  it("items with an availability note also have links", () => {
    for (const item of PORTFOLIO_ITEMS) {
      if (item.availability) expect(item.links?.length ?? 0).toBeGreaterThan(0);
    }
  });
});

describe("other content", () => {
  it("FAQ entries are non-empty", () => {
    for (const f of FAQ_ITEMS) {
      expect(f.q.trim()).not.toBe("");
      expect(f.a.trim()).not.toBe("");
    }
  });

  it("nav links are in-page anchors or paths", () => {
    for (const l of NAV_LINKS) expect(l.href).toMatch(/^(#|\/)/);
  });
});
