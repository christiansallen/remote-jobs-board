// import { dummyData } from "@/data/jobs";
import { JobCard } from "./JobCard";
import { fetchJobs } from "@/services/jobsService";

export const JobsList = async () => {
  const jobs = await fetchJobs(5);
  console.log("jobs", jobs);
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
