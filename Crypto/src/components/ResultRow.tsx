type ResultRowProps = {
  loading?: boolean;
};
export const ResultRow = (props: ResultRowProps) => {
  return (
    <div className="relative mx-auto min-h-12 my-2 py-4 px-4 w-4/5 bg-[#00ADB5]/30 rounded-md overflow-hidden">
      <div className="flex gap-4">
        <div>Logo</div>
        <div className="grow">Provider Name</div>
        <div>
          <span className="text-lg pr-2">1.000</span>
          <span className="text-gray-200">BTC</span>
        </div>
      </div>
      {props.loading && (
        <div className="bg-gradient-to-r from-transparent via-[#00ADB5]/30 to-transparent absolute inset-0 rounded-md skeleton-animation" />
      )}
    </div>
  );
};
