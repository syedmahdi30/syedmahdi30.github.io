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
  const flagshipProjects = within(work).getByRole("list", {
    name: /flagship projects/i,
  });
  const headings = within(flagshipProjects).getAllByRole("heading", { level: 3 });

  expect(headings.map((heading) => heading.textContent)).toEqual([
    "Carboncopies: Auth-aware RAG infrastructure",
    "Algoverse: Multimodal emotion interpretability",
    "Volatility forecasting: Short-horizon benchmarking",
  ]);
});

test("renders supporting projects in newest-to-oldest order", () => {
  render(<App />);

  const work = screen.getByRole("region", { name: /selected work/i });
  const additionalWork = within(work).getByRole("region", {
    name: /additional work/i,
  });
  const additionalProjects = within(additionalWork).getByRole("list", {
    name: /additional projects/i,
  });
  const headings = within(additionalProjects).getAllByRole("heading", {
    level: 4,
  });

  expect(headings.map((heading) => heading.textContent)).toEqual([
    "Bilingual medical terminology RAG benchmark",
    "Chicago crime data analysis",
  ]);
  expect(
    within(additionalWork).getByText(
      "Co-developed with a three-person project team."
    )
  ).toBeInTheDocument();
});

test("renders Chicago crime analysis with leadership and bounded evidence", () => {
  render(<App />);

  const work = screen.getByRole("region", { name: /selected work/i });
  const additionalWork = within(work).getByRole("region", {
    name: /additional work/i,
  });

  expect(
    within(additionalWork).getByRole("heading", {
      level: 4,
      name: /chicago crime data analysis/i,
    })
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByText("Project lead and data engineer")
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByText(
      "Led a five-person course team across data engineering, spatial analysis, visualization, and modeling."
    )
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByText(
      "14 million crime points · ZIP-code spatial join · Parquet pipeline · Spark ML arrest prediction"
    )
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByRole("link", { name: /view source/i })
  ).toHaveAttribute(
    "href",
    "https://github.com/syedmahdi30/cs167-final-project/tree/a-5"
  );
  expect(
    within(additionalWork).queryByText(/80% compression/i)
  ).not.toBeInTheDocument();
  expect(
    within(additionalWork).queryByText(/precision:\s*\d/i)
  ).not.toBeInTheDocument();
  expect(
    within(additionalWork).queryByText(/recall:\s*\d/i)
  ).not.toBeInTheDocument();
});

test("renders the healthcare RAG benchmark with bounded evidence", () => {
  render(<App />);

  const work = screen.getByRole("region", { name: /selected work/i });
  const additionalWork = within(work).getByRole("region", {
    name: /additional work/i,
  });

  expect(
    within(additionalWork).getByText(
      /8,971 terms · 384-dimensional embeddings · 5 local models · 4-query exploratory evaluation/i
    )
  ).toBeInTheDocument();
  expect(
    within(additionalWork).getByRole("link", { name: /read paper/i })
  ).toHaveAttribute(
    "href",
    "/docs/AI_in_Healthcare___High_Risk_Project___Ludolf_J___Santupur_S_______Islam_S_-2.pdf"
  );
  expect(
    within(additionalWork).getByRole("link", { name: /open colab/i })
  ).toHaveAttribute(
    "href",
    "https://colab.research.google.com/drive/1Ph4nrJbk3Lz8DiFKpPYKiSMPfrF5mb1W?usp=sharing"
  );
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
