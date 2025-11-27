export const PreviewScore = ({ score }: { score: number }) => {
  // const score =
  // results.reduce((total, { score }) => total + score, 0) / results.length;
  return (
    <div>
      <span>{score}</span>
      <span>of 100</span>
    </div>
  );
};
