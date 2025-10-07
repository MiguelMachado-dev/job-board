import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/formatters";
import { useJob } from "../hooks/useJob";

function JobPage() {
  const { jobId } = useParams();
  const { data, isLoading } = useJob({ jobId });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="title is-2">{data.title}</h1>
      <h2 className="subtitle is-4">
        <Link to={`/companies/${data.company.id}`}>{data.company.name}</Link>
      </h2>
      <div className="box">
        <div className="block has-text-grey">
          Posted: {formatDate(data.date, "long")}
        </div>
        <p className="block">{data.description}</p>
      </div>
    </div>
  );
}

export default JobPage;
