import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("presents Syed as an ML systems engineer", () => {
  render(<App />);

  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "ML systems engineer building reliable infrastructure for intelligent systems."
  );
  expect(screen.getByRole("link", { name: /view selected work/i })).toHaveAttribute(
    "href",
    "#work"
  );
});

test("renders the three flagship projects in priority order", () => {
  render(<App />);

  const work = screen.getByRole("region", { name: /selected work/i });
  const headings = within(work).getAllByRole("heading", { level: 3 });

  expect(headings.map((heading) => heading.textContent)).toEqual([
    "Carboncopies: Auth-aware RAG infrastructure",
    "Algoverse: Multimodal emotion interpretability",
    "Volatility forecasting: Short-horizon benchmarking",
  ]);
});

test("states the volatility benchmark result without overstating performance", () => {
  render(<App />);

  expect(
    screen.getByText(/AAPL: naive baseline best · MSFT RF: 3\.9% lower RMSE/i)
  ).toBeInTheDocument();
  expect(screen.queryByText(/tree models outperformed/i)).not.toBeInTheDocument();
});

test("provides direct resume and email conversion paths", () => {
  render(<App />);

  const resumeLinks = screen.getAllByRole("link", { name: /resume/i });
  expect(
    resumeLinks.some(
      (link) =>
        link.getAttribute("href") === "/docs/Syed_Resume_Current%20copy.pdf"
    )
  ).toBe(true);
  expect(screen.getByRole("link", { name: /email syed/i })).toHaveAttribute(
    "href",
    "mailto:syedmahdi30@gmail.com"
  );
});

test("offers a keyboard skip link to the main content", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: /skip to content/i })).toHaveAttribute(
    "href",
    "#main-content"
  );
});
