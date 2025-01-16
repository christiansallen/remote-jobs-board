export const ApplyButton = ({ url }: { url: string }) => {
  return (
    <div>
      <button
        className="btn btn-primary rounded-full text-xs h-8 min-h-8"
        onClick={() => window.open(url, "_blank")}
      >
        Learn More
      </button>
      <button className="btn btn-primary rounded-full text-xs h-8 min-h-8">
        Apply
      </button>
    </div>
  );
};
