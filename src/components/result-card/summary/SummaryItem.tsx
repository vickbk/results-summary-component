import type { CSSProperties } from "react";
import type { SummaryItemType } from "../../../libs/types/summay-item-type";

export const SummaryItem = ({
  icon,
  category,
  score,
  color,
}: SummaryItemType & { color: string }) => {
  return (
    <li
      className={`flex items-center gap-4 p-4 rounded-lg ${color}`}
      style={{ "--bg-accent": 0.03 } as CSSProperties}
    >
      <img src={icon} alt="" />
      <span className={"mr-auto font-bold c-" + color}>{category}</span>
      <span className="font-bold">{score}</span> / 100
    </li>
  );
};
