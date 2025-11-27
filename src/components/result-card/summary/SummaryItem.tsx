import type { SummaryItemType } from "../../../libs/types/summay-item-type";

export const SummaryItem = ({ icon, category, score }: SummaryItemType) => {
  return (
    <li className="flex items-center gap-4">
      <img src={icon} alt="" />
      <span className="mr-auto">{category}</span>
      {score} / 100
    </li>
  );
};
