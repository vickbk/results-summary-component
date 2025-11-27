import type { SummaryItemType } from "../../../libs/types/summay-item-type";
import { SummaryItem } from "./SummaryItem";

export const ResultSummary = ({ results }: { results: SummaryItemType[] }) => {
  return (
    <section>
      <h3>Summary</h3>
      <ul>
        {results.map((result, key) => (
          <SummaryItem {...result} key={key} />
        ))}
      </ul>
      <button type="button">Continue</button>
    </section>
  );
};
