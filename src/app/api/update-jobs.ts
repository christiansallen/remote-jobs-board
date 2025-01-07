import { db } from "../../drizzle";
import { jobsTable } from "../../drizzle/schema";

const fetchAndUpdateJobs = async (req, res) => {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return res.status(401).end("Unauthorized");
  }

  try {
    // Fetch new job data from your source API
    const newJobs = await fetch("https://api.remotive.io/remote-jobs").then(
      (res) => res.json()
    );

    // Upsert new jobs into the database
    for (const job of newJobs.jobs) {
      await db.insert(jobsTable).values({
        title: job.title,
        company_name: job.company_name,
        company_logo: job.company_logo,
        candidate_required_location: job.candidate_required_location,
        category: job.category,
        description: job.description,
        job_type: job.job_type,
        publication_date: job.publication_date,
        salary: job.salary,
        tags: job.tags || [],
        url: job.url,
      });
    }

    res.status(200).json({ message: "Jobs updated successfully!" });
  } catch (error) {
    console.error("Error updating jobs:", error);
    res.status(500).json({ error: "Failed to update jobs" });
  }
};

export default fetchAndUpdateJobs;
