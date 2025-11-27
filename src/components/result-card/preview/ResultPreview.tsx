import { PreviewDetails } from "./PreviewDetails";
import { PreviewScore } from "./PreviewScore";

export const ResultPreview = ({ score }: { score: number }) => {
  return (
    <section className="grid gap-4 p-8 violet-blue c-white">
      <h3>Your Result</h3>
      <PreviewScore score={score} />
      <PreviewDetails />
    </section>
  );
};
