import Footer from "../components/Footer/Footer";
import JobDetail from "../components/JobDetail/JobDetail";
import JobDetailsDetail from "../components/JobDetailsDetail";
import MainNavJobList from "../components/JobList/MainNavJobList";
import RelatedJobs from "../components/RelatedJobs/RelatedJobs";
import TopNav from "../components/TopNav";

function JobDetails() {
  return (
    <div>
      <TopNav />
      <MainNavJobList />
      <JobDetailsDetail />
      <JobDetail />
      <RelatedJobs />
      <Footer />
    </div>
  );
}

export default JobDetails;
