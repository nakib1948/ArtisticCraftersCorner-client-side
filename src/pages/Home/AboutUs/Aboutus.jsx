import bg1 from "../../../assets/AboutUS/bg1.jpg"

const Aboutus = () => {
  return (
    <div
      className="hero min-h-screen my-10 bg-fixed"
      style={{
        backgroundImage:
          `url(${bg1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div  className="max-w-lg">
          <h1 data-aos="flip-right" data-aos-duration="1000" className="mb-5 text-5xl font-bold">Discover The Joys of Creating at Art and Craft Exhibition</h1>
          <p data-aos="flip-left" data-aos-duration="1000" className="mb-5 text-xl font-serif" >
          Create Beauty Out Of Simplicity
          </p>
          <button data-aos="flip-up" data-aos-duration="1000" className="btn btn-outline text-white bg-deepred">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
