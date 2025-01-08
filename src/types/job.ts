export type Job = {
  job_id: number;
  title: string;
  company_name: string;
  company_logo?: string;
  candidate_required_location?: string;
  category?: string;
  description: string;
  job_type?: string;
  publication_date?: string;
  salary?: string;
  tags?: string[];
  url: string;
};
