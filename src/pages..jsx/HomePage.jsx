import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MainNav from "../components/MainNav";
import PopularVacancies from "../components/PopularVacancies";
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
      </nav>
    </div>
  );
}

export default HomePage;
