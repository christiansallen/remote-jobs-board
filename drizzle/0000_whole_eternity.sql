CREATE TABLE "jobs" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "jobs_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"candidate_required_location" varchar(255),
	"category" varchar(255),
	"company_logo" varchar(255),
	"company_name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"job_type" varchar(255),
	"publication_date" varchar(255),
	"salary" varchar(255),
	"tags" varchar(255)[] NOT NULL,
	"title" varchar(255) NOT NULL,
	"url" varchar(255) NOT NULL
);
