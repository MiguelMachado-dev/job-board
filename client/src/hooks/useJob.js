import { useQuery } from "@tanstack/react-query";
import { getJob } from "../lib/graphql/queries";

export function useJob({ jobId }) {
  return useQuery({
    queryKey: ["job", jobId],
    queryFn: () => getJob(jobId),
  });
}
