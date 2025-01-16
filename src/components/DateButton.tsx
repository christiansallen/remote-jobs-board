export const DateButton = ({ date }: { date: string }) => {
  const populatedText = () => {
    const currentDate = new Date();
    const givenDate = new Date(date);

    const timeDifference = currentDate.getTime() - givenDate.getTime(); // Difference in milliseconds
    const differenceInDays = timeDifference / (1000 * 60 * 60 * 24); // Convert to days

    if (differenceInDays <= 2) {
      // Within 2 days, return "New"
      return "New";
    } else if (differenceInDays <= 7) {
      // Less than or equal to 7 days, return "xd"
      return `${Math.ceil(differenceInDays)}d`;
    } else if (differenceInDays <= 30) {
      // Less than or equal to 30 days, return "xw"
      return `${Math.ceil(differenceInDays / 7)}w`;
    } else if (differenceInDays <= 90) {
      // Less than or equal to 90 days, return "xm"
      return `${Math.ceil(differenceInDays / 30)}m`;
    } else {
      // More than 3 months, return "3m+"
      return "3m+";
    }
  };
  return (
    <div>
      <button className="btn btn-primary rounded-full text-xs h-8 min-h-8">
        {populatedText()}
      </button>
    </div>
  );
};
