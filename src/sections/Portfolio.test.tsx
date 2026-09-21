import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Portfolio from "./Portfolio";
import { PORTFOLIO_ITEMS } from "@/constants/content";

vi.mock("@/components/FadeIn", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe("Portfolio", () => {
  it("renders a tab for every project", () => {
    render(<Portfolio />);
    for (const p of PORTFOLIO_ITEMS) {
      expect(screen.getByRole("button", { name: new RegExp(p.title) })).toBeInTheDocument();
    }
  });

  it("shows store links and the regional note for QuickCrew App", async () => {
    render(<Portfolio />);
    await userEvent.click(screen.getByRole("button", { name: /QuickCrew App/ }));

    const appStore = screen.getByRole("link", { name: /App Store/ });
    expect(appStore).toHaveAttribute("href", "https://apps.apple.com/app/id6761596626");
    expect(appStore).toHaveAttribute("target", "_blank");
    expect(appStore).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(screen.getByRole("link", { name: /Google Play/ })).toBeInTheDocument();
    expect(screen.getByText(/New Zealand and Australia/)).toBeInTheDocument();
  });

  it("shows no links for projects without any", async () => {
    render(<Portfolio />);
    await userEvent.click(screen.getByRole("button", { name: /QuickCrew Landing/ }));
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
