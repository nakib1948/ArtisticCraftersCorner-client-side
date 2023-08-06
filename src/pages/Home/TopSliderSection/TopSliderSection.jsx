import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import bg1 from "../../../assets/TopSlider/slide1.jpg"
import bg2 from "../../../assets/TopSlider/slide2.jpg"
import bg3 from "../../../assets/TopSlider/slide3.jpg"
import bg4 from "../../../assets/TopSlider/slide4.jpg"
const AutoplaySlider = withAutoplay(AwesomeSlider);
const TopSliderSection = () => {
    const sliders = [
        {
          title: "Discover Your Creative Side",
          image: bg1,
          text: "Unleash Your Imagination. Join Our Art Classes Today!",
          message: "Explore the world of colors and textures with our diverse art and craft classes. From painting to pottery, we have it all."
        },
        {
          title: "Crafting Masterpieces",
          image: bg2,
          text: "Create Art with Your Hands",
          message: "Learn the art of crafting unique masterpieces with our experienced instructors. Express your creativity with paper, clay, and more."
        },
        {
          title: "Drawing & Sketching",
          image: bg3,
          text: "From Lines to Lifelike Art",
          message: "Start from simple lines and progress to creating realistic sketches. Our drawing classes will help you hone your artistic skills."
        },
        {
          title: "The Joy of Pottery",
          image: bg4,
          text: "Sculpt Your Dreams",
          message: "Experience the joy of molding clay into beautiful pottery pieces. Join our pottery classes and bring your imagination to life."
        }
      ];
      


  return (
    <AutoplaySlider play={true}
    cancelOnInteraction={false} 
    interval={6000}>
    {sliders.map((data) => (
      <div
        key={data.title}
        className="hero min-h-screen bg-cover"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div data-aos="flip-up" data-aos-duration="1500" className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-deepred  px-10 py-5 rounded-sm">
            <h1 className="mb-5 text-3xl font-bold">{data.title}</h1>
            <p className="mb-5">
              {data.message}
            </p>
            <p className='text-2xl font-bold'>* Read More *</p>
          </div>
        </div>
      </div>
    ))}
  </AutoplaySlider>
  
  );
};

export default TopSliderSection;
