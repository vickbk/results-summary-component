import { PreviewDetails } from "./PreviewDetails";
import { PreviewScore } from "./PreviewScore";

export const ResultPreview = ({ score }: { score: number }) => {
  return (
    <section>
      <h3>Your result</h3>
      <PreviewScore score={score} />
      <PreviewDetails />
    </section>
  );
};
