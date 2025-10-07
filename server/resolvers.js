import { getJobs } from "./db/jobs.js";

export const resolvers = {
  Query: {
    jobs: async () => getJobs(),
  },

  Job: {
    date: (job) => toIsoDate(job.createdAt),
  },
};

function toIsoDate(date) {
  return date.slice(0, "yyyy-mm-dd".length);
}
