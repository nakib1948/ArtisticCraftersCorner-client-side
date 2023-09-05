import rightarrow from "../../../assets/AboutUS/icons8-right-button-16.png";

const Intruduction = () => {
  return (
    <div
      className="my-10 pb-10"
      style={{
        backgroundImage: "url(https://i.ibb.co/Wsr3MR3/wood-591631-1920.jpg)",
      }}
    >
      <p className="text-white text-5xl font-semibold text-center pt-5">
        Welcome to us
      </p>
      <p className="text-white text-lg  mb-10 font-semibold text-center">
        Attend our art and craft school
      </p>
      <div className="grid grid-cols-1 mb-10 md:grid-cols-2 ">
        <div className="mx-auto my-auto"
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        >
          <img
            className="h-96 w-full md:h-[400px]"
            src="https://i.ibb.co/sV1jckP/kids-6348164-1280.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="hero "
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          >
            <div className="hero-content h-96 bg-[#1A1A1D] md:mr-10 lg:mr-10 text-center">
              <div className="w-full mx-auto">
                <p className="text-deepred font-semibold">WELCOME THERE</p>
                <h1 className="text-5xl text-white font-bold">
                  Art and Craft learning school
                </h1>
                <p className="py-6 text-white">
                  At our School, we share our passion for art and craft training
                  with students from all walks of life. Whether young or old,
                  beginner or master, our students grow!
                </p>
                <button className="btn bg-deepred text-white">
                  More about us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
        <div>
          <div className="hero "
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500">
            <div className="hero-content w-full h-96 bg-[#1A1A1D] md:ml-10 lg:ml-10 text-center">
              <div className="w-full mx-auto">
                <h1 className="text-5xl text-white font-bold">Our Programs</h1>
                <p className="my-2 text-white font-semibold">PRIVATE LESSONS</p>
                <div className="inline-block w-28 h-1 rounded-lg bg-red-400 "></div>
                <p className="my-2 text-white font-semibold">
                  EARLY CHILDHOOD ART & CRAFT Training
                </p>
                <div className="inline-block w-28 h-1 rounded-lg bg-red-400 "></div>
                <p className="my-2 text-white font-semibold">
                  KIDS, TEENS & ADULTS GROUPS
                </p>
                <div className="inline-block w-28 h-1 rounded-lg bg-red-400 "></div>
                <p className="my-2 text-white font-semibold">
                   
                    SUMMER PROGRAMS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto my-auto"
        data-aos="flip-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        >
          <img
            className="h-96 w-full md:h-[400px]"
            src="https://i.ibb.co/vDtLhBQ/pexels-yan-krukau-8612993-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intruduction;
