import type { SummaryItemType } from "../../../libs/types/summay-item-type";
import { SROnly } from "../../shared/SROnly";
import { SummaryItem } from "./SummaryItem";

export const ResultSummary = ({ results }: { results: SummaryItemType[] }) => {
  return (
    <section className="p-8 grid gap-4">
      <h3 className="text-start font-bold">
        Summary <SROnly>of your results</SROnly>
      </h3>
      <ul className="grid gap-4">
        {results.map((result, key) => (
          <SummaryItem {...result} key={key} />
        ))}
      </ul>
      <button type="button">Continue</button>
    </section>
  );
};
