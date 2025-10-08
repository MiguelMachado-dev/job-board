import { useQuery } from "@tanstack/react-query";
import { getCompany } from "../lib/graphql/queries";

export function useGetCompany(companyId) {
  return useQuery({
    queryKey: ["company-id", companyId],
    queryFn: () => getCompany(companyId),
    retry: false, // Disable retries so errors are shown immediately
  });
}
