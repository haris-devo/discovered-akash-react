import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/landing/LandingPage";
import Navbar from "../components/landing/herosection/Navbar";
import Configurator from "../components/configurator/components/Configurator";
import Footer from "../components/footer/Footer";
import Profile from "../components/profile/Profile";

const Routers = () => {
  return (
    <>
      {/* React routers  */}
      <Navbar />
      <Routes>
        {/* Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default Routers;
