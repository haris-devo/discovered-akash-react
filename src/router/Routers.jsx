import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/landing/LandingPage";
import Navbar from "../components/landing/herosection/Navbar";
import Configurator from "../components/configurator/components/Configurator";
import Footer from "../components/footer/Footer";

const Routers = () => {
  return (
    <>
      {/* React routers  */}
      <Navbar />
      <Routes>
        {/* Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/configurator" element={<Configurator />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default Routers;
