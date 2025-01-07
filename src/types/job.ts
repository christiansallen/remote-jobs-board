export type Job = {
  id: number;
  title: string;
  company_name: string;
  company_logo?: string | null;
  url: string;
  tags: string[];
  salary?: string | null;
  publication_date: string;
  job_type: string;
  description: string;
  category?: string | null;
  candidate_required_location?: string | null;
};
