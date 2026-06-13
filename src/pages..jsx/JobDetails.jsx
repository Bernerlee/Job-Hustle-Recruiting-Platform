import JobDetailsDetail from "../components/JobDetailsDetail";
import MainNavJobList from "../components/JobList/MainNavJobList";
import TopNav from "../components/TopNav";

function JobDetails() {
  return (
    <div>
      <TopNav />
      <MainNavJobList />
      <JobDetailsDetail />
    </div>
  );
}

export default JobDetails;
