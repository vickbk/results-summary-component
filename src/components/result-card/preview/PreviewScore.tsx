export const PreviewScore = ({ score }: { score: number }) => {
  return (
    <div className="px-8 justify-self-center grid items-center aspect-square rounded-full pale-blue">
      <div>
        <span className="block text-5xl font-bold">{score.toFixed()}</span>
        <span className="text-xs"> of 100</span>
      </div>
    </div>
  );
};
