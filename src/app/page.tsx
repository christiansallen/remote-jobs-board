import { JobsList } from "@/components/JobsList";

export default async function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center">Welcome to the Jobs App</h1>
      <JobsList />
    </div>
  );
}
