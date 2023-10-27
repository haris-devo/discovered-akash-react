import HeroSection from "./herosection/HeroSection";
import BasicTabs from "./posters/NewPosters";

const LandingPage = () => {
  return (
    <>
      <div className="font-inter">
        <HeroSection />
        <BasicTabs />
      </div>
    </>
  );
};

export default LandingPage;
