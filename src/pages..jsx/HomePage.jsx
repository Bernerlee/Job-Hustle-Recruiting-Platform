import Hero from "../components/Hero";
import MainNav from "../components/MainNav";
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
      </nav>
    </div>
  );
}

export default HomePage;
