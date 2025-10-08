import { useParams } from "react-router";
import { useGetCompany } from "../hooks/useGetCompany";
import JobList from "../components/JobList";

function CompanyPage() {
  const { companyId } = useParams();

  const { data: company, isLoading, isError, error } = useGetCompany(companyId);

  if (isError) {
    return (
      <div className="notification is-danger">
        <p>Error fetching company info.</p>
        <p>Details: {error?.message || "Unknown error"}</p>
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="title">{company.name}</h1>
          <div className="box">{company.description}</div>
          <h2 className="title is-5">Jobs at {company.name}</h2>
          <JobList jobs={company.jobs} />
        </>
      )}
    </div>
  );
}

export default CompanyPage;
