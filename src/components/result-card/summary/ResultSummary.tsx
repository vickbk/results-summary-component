import type { SummaryItemType } from "../../../libs/types/summay-item-type";
import { SROnly } from "../../shared/SROnly";
import { SummaryItem } from "./SummaryItem";

export const ResultSummary = ({ results }: { results: SummaryItemType[] }) => {
  const colors = {
    Reaction: "light-red",
    Memory: "orangey-yellow",
    Verbal: "green-teal",
    Visual: "cobalt-blue",
  } as const;
  return (
    <section className="p-8 grid gap-4">
      <h3 className="text-start font-bold">
        Summary <SROnly>of your results</SROnly>
      </h3>
      <ul className="grid gap-4">
        {results.map((result, key) => (
          <SummaryItem
            {...result}
            color={colors[result.category as keyof typeof colors]}
            key={key}
          />
        ))}
      </ul>
      <button
        className="dark-gray-blue c-white rounded-l-full rounded-r-full p-4"
        type="button"
      >
        Continue
      </button>
    </section>
  );
};
