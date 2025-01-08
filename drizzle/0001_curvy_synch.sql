ALTER TABLE "jobs" ALTER COLUMN "company_logo" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "jobs" ALTER COLUMN "tags" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "job_id" integer NOT NULL;