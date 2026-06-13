import CTASection from "../components/CTASection/CTASection";
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MainNav from "../components/MainNav";
import PopularVacancies from "../components/PopularVacancies";
import Testimonials from "../components/Testimonials/Testimonials";
import TopCompanies from "../components/TopCompanies/TopCompanies";
import TopNav from "../components/TopNav";

function HomePage() {
  return (
    <div>
      {/* <header>
        <h1>HomePage</h1>
      </header> */}
      <nav>
        <TopNav />
        <MainNav />
        <Hero />
        <PopularVacancies />
        <HowItWorks />
        <FeaturedJobs />
        <TopCompanies />
        <Testimonials />
        <CTASection />
        <Footer />
      </nav>
    </div>
  );
}

export default HomePage;
