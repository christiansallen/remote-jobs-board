import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const jobsTable = pgTable("jobs", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  job_id: integer().notNull(),
  candidate_required_location: varchar({ length: 255 }),
  category: varchar({ length: 255 }),
  company_logo: varchar({ length: 255 }),
  company_name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  job_type: varchar({ length: 255 }),
  publication_date: varchar({ length: 255 }),
  salary: varchar({ length: 255 }),
  tags: varchar({ length: 255 }).array(),
  title: varchar({ length: 255 }).notNull(),
  url: varchar({ length: 255 }).notNull(),
});
