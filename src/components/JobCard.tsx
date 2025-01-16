"use client";

import { useState } from "react";
import { Job } from "@/types/job";
import { JobTags } from "./JobTags";
import { DateButton } from "./DateButton";
import { ApplyButton } from "./ApplyButton";

export const JobCard = ({ job }: { job: Job }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const jobTags = [
    job?.category,
    job?.salary,
    job?.candidate_required_location,
  ].filter((tag) => tag !== null && tag !== undefined);

  return (
    <div
      className="bg-neutral min-w-full my-2 shadow-xl cursor-pointer hover:bg-secondary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex flex-row items-center">
          <img
            src={job.company_logo}
            alt={job.company_name}
            loading="lazy"
            className="w-8 h-8 rounded-full mr-5"
          />
          <div className="flex flex-col">
            <h2 className="">
              {job.title} | {job.company_name}
            </h2>
            <JobTags tags={jobTags} />
          </div>
        </div>
        <div className="justify-end">
          {isHovered ? (
            <ApplyButton url={job.url} />
          ) : (
            <DateButton date={job.publication_date} />
          )}
        </div>
      </div>
    </div>
  );
};
