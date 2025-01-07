import { dummyData } from "@/data/jobs";
import { JobCard } from "./JobCard";

export const JobsList = () => {
  const firstHundredJobs = dummyData.jobs.slice(0, 5);
  console.log("firstHundredsJobs", firstHundredJobs);
  return (
    <div>
      {firstHundredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
