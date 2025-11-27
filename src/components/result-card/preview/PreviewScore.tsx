export const PreviewScore = ({ score }: { score: number }) => {
  return (
    <div className="px-4 justify-self-center grid place-items-center aspect-square">
      <span className="block text-4xl">{score.toFixed()}</span>
      <span className="text-xs"> of 100</span>
    </div>
  );
};
