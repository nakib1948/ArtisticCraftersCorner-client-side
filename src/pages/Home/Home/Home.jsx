import Aboutus from "../AboutUs/Aboutus";
import ClassesSection from "../ClassesSections/ClassesSection";
import Gallery from "../Gallery/Gallery";
import InstructorSection from "../InstructorSection/InstructorSection";
import TopSliderSection from "../TopSliderSection/TopSliderSection";

const Home = () => {
    return (
        <div>
            <TopSliderSection/>
            <ClassesSection/>
            <InstructorSection/>
            <Aboutus/>
            <Gallery/>
        </div>
    );
};

export default Home;