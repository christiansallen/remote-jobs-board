import { db } from "@/drizzle/index";
import { jobsTable } from "@/drizzle/schema";

export async function fetchJobs(limit: number = 5) {
  const jobData = await db.select().from(jobsTable);
  return jobData.slice(0, limit);
}
