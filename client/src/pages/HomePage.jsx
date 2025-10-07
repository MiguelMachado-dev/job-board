import JobList from "../components/JobList";
import { getJobs } from "../lib/graphql/queries";

const jobs = getJobs().then((jobs) => console.log({ jobs }));

function HomePage() {
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
