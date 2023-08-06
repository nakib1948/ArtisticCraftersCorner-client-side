import Aboutus from "../AboutUs/Aboutus";
import ClassesSection from "../ClassesSections/ClassesSection";
import Gallery from "../Gallery/Gallery";
import InstructorSection from "../InstructorSection/InstructorSection";
import TopSliderSection from "../TopSliderSection/TopSliderSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ArtisticCraftersCorner | Home</title>
      </Helmet>
      <TopSliderSection />
      <ClassesSection />
      <InstructorSection />
      <Aboutus />
      <Gallery />
    </div>
  );
};

export default Home;
