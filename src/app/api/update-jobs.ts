import { db } from "../../drizzle/index";
import { jobsTable } from "../../drizzle/schema";
import { Job } from "@/types/job";

const fetchAndUpdateJobs = async (req, res) => {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return res.status(401).end("Unauthorized");
  }

  try {
    const newJobs = await fetch("https://api.remotive.io/remote-jobs").then(
      (res) => res.json()
    );

    for (const job of newJobs.jobs) {
      const newJob: Job = {
        job_id: job.id,
        title: job.title,
        company_name: job.company_name,
        company_logo: job.company_logo ?? "",
        candidate_required_location: job.candidate_required_location ?? null,
        category: job.category ?? null,
        description: job.description,
        job_type: job.job_type ?? null,
        publication_date: job.publication_date ?? null,
        salary: job.salary ?? null,
        tags: job.tags || [],
        url: job.url,
      };

      await db.insert(jobsTable).values(newJob);
    }

    res.status(200).json({ message: "Jobs updated successfully!" });
  } catch (error) {
    console.error("Error updating jobs:", error);
    res.status(500).json({ error: "Failed to update jobs" });
  }
};

export default fetchAndUpdateJobs;
