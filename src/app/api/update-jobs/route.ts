import { NextResponse } from "next/server";
import { db } from "../../../drizzle/index";
import { jobsTable } from "../../../drizzle/schema";
import { Job } from "@/types/job";

export async function POST(req: Request) {
  const authorizationHeader = req.headers.get("Authorization");
  if (authorizationHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const newJobs = await fetch("https://remotive.com/api/remote-jobs").then(
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

    return NextResponse.json(
      { message: "Jobs updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating jobs:", error);
    return NextResponse.json(
      { error: "Failed to update jobs" },
      { status: 500 }
    );
  }
}
