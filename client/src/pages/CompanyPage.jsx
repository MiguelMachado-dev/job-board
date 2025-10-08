import { useParams } from "react-router";
import { useGetCompany } from "../hooks/useGetCompany";

function CompanyPage() {
  const { companyId } = useParams();

  const { data: company, isLoading } = useGetCompany(companyId);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="title">{company.name}</h1>
          <div className="box">{company.description}</div>
        </>
      )}
    </div>
  );
}

export default CompanyPage;
