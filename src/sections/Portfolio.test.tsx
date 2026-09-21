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

  it("links the live sites", async () => {
    render(<Portfolio />);
    await userEvent.click(screen.getByRole("button", { name: /QuickCrew Landing/ }));
    expect(screen.getByRole("link", { name: /quickcrew-landing/ })).toHaveAttribute(
      "href",
      "https://quickcrew-landing.vercel.app/"
    );
    await userEvent.click(screen.getByRole("button", { name: /Viviana/ }));
    expect(screen.getByRole("link", { name: /viviana-rodriguez/ })).toHaveAttribute(
      "href",
      "https://viviana-rodriguez.vercel.app/"
    );
  });

  it("shows the Figma artwork gallery for Sweet Baby Name", async () => {
    render(<Portfolio />);
    await userEvent.click(screen.getByRole("button", { name: /Sweet Baby Name/ }));
    expect(screen.getByText("Brand & illustration")).toBeInTheDocument();
    expect(screen.getByText(/designed by me in Figma/)).toBeInTheDocument();
    expect(screen.getAllByAltText("Brand · Doctor").length).toBeGreaterThan(0);
  });
});
