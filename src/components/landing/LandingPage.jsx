import Category from "./catergories/Category";
import HeroSection from "./herosection/HeroSection";
import BasicTabs from "./posters/NewPosters";

const LandingPage = () => {
  return (
    <>
      <div className="font-inter">
        <HeroSection />
        <BasicTabs />
        <Category />
      </div>
    </>
  );
};

export default LandingPage;
