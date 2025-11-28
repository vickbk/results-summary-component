import { ResultPreview } from "./preview/ResultPreview";
import { ResultSummary } from "./summary/ResultSummary";
import { default as results } from "../../assets/data.json";

export const ResultCard = () => {
  const score =
    results.reduce((total, { score }) => total + score, 0) / results.length;
  return (
    <article className="text-center white md:rounded-4xl grid md:grid-cols-2 max-w-160">
      <h2 className="sr-only">A card with your results</h2>
      <ResultPreview score={score} />
      <ResultSummary results={results} />
    </article>
  );
};
