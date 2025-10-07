import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../lib/graphql/queries";

export function useJobs() {
  return useQuery({
    queryKey: ["jobs"], // A unique key for this query
    queryFn: getJobs, // The function that fetches the data
  });
}
