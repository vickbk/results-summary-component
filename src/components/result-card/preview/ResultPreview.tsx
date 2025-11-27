import { PreviewDetails } from "./PreviewDetails";
import { PreviewScore } from "./PreviewScore";

export const ResultPreview = ({ score }: { score: number }) => {
  return (
    <section className="">
      <h3>Your Result</h3>
      <PreviewScore score={score} />
      <PreviewDetails />
    </section>
  );
};
