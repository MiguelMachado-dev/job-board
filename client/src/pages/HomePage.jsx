import JobList from "../components/JobList";
import { useJobs } from "../hooks/useJobs";

function HomePage() {
  const { data, isLoading, error } = useJobs();

  if (isLoading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>Error loading jobs: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={data} />
    </div>
  );
}

export default HomePage;
