// import { JobsList } from "@/components/JobsList";
import { db } from "@/drizzle/index";
import { jobsTable } from "@/drizzle/schema";

export default async function Home() {
  const jobData = await db.select().from(jobsTable);
  console.log("jobData", jobData);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center">Welcome to the Jobs App</h1>
      {/* <JobsList /> */}
    </div>
  );
}
