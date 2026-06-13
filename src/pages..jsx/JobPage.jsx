import JobGrid from "../components/JobGrid/JobGrid";
import FindJob from "../components/JobList/FindJob";
import MainNavJobList from "../components/JobList/MainNavJobList";
import JobSearchBar from "../components/JobSearchBar/JobSearchBar";
import TopNav from "../components/TopNav";

function JobPage() {
  return (
    <div>
      <TopNav />
      <MainNavJobList />
      <FindJob />
      <JobSearchBar />
      <JobGrid />
    </div>
  );
}

export default JobPage;
