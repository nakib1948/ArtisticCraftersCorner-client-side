import Aboutus from "../AboutUs/Aboutus";
import AlumaniWork from "../AlumaniWork/AlumaniWork";
import ClassesSection from "../ClassesSections/ClassesSection";
import Gallery from "../Gallery/Gallery";
import InstructorSection from "../InstructorSection/InstructorSection";
import Intruduction from "../Intruduction/Intruduction";
import Testimonial from "../Testimonial/Testimonial";
import TopSliderSection from "../TopSliderSection/TopSliderSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className=" mx-auto max-w-7xl">
      <Helmet>
        <title>ArtisticCraftersCorner | Home</title>
      </Helmet>
      <TopSliderSection />
      <Intruduction/>
      <ClassesSection />
      <InstructorSection />
      <Aboutus />
      <AlumaniWork/>
      <Testimonial/>
      <Gallery />
    </div>
  );
};

export default Home;
