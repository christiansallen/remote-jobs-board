export const JobTags = ({ tags }: { tags: string[] }) => {
  console.log("tags", tags);

  return (
    <span className="flex flex-row">
      {tags.map(
        (tag: string) =>
          tag && (
            <div
              key={tag}
              className="mr-2 bg-primary text-white p-1 rounded hover:text-green-300"
            >
              {tag}
            </div>
          )
      )}
    </span>
  );
};
