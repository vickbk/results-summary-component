export const PreviewScore = ({ score }: { score: number }) => {
  return (
    <div className="px-12 justify-self-center grid items-center aspect-square rounded-full pale-blue preview__score">
      <div>
        <span className="block text-7xl font-bold">{score.toFixed()}</span>
        <span className="text-xs"> of 100</span>
      </div>
    </div>
  );
};
