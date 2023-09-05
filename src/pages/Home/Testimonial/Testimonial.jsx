import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import quote1 from "../../../assets/quote1.svg";
import quote2 from "../../../assets/quote2.svg";

const Testimonial = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url(https://i.ibb.co/5hYBjwY/art-2941706-1920.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="text-center px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl text-deepred font-serif italic">
            Testimonials
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-6">
            What Our Students Say
          </h1>
        </div>
        <div className="swiper-container my-8 sm:my-12 mx-auto md:max-w-md lg::max-w-md w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="text-xl  font-semibold text-center">
                <img className="h-10 mx-auto" src={quote1} alt="" />
                This art and craft website is a lifesaver! The step-by-step
                tutorials are super easy to follow, and I have learned so much
                about different art techniques. It is a fantastic resource for
                students like me who want to improve their creative skills.
                <img className="h-10 mx-auto" src={quote2} alt="" />
              </div>
              <img
                className="h-24 rounded-full mx-auto mt-4"
                src="https://i.ibb.co/VSfzjz0/teenager-1887364-640.jpg"
                alt=""
              />
              <p className="text-center text-deepred font-semibold text-xl">
                Sarah Summer
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-xl  font-semibold text-center">
                <img className="h-10 mx-auto" src={quote1} alt="" />
                I stumbled upon this website while looking for inspiration for
                my art project, and it exceeded my expectations. The variety of
                art styles and craft ideas is impressive. I love how they also
                feature work from other students, which motivates me to keep
                exploring my artistic side.
                <img className="h-10 mx-auto" src={quote2} alt="" />
              </div>
              <img
                className="h-24 rounded-full mx-auto mt-4"
                src="https://i.ibb.co/tbpTv39/boy-2691493-640.jpg"
                alt=""
              />
              <p className="text-center text-deepred font-semibold text-xl">
                John Cutter
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-xl  font-semibold text-center">
                <img className="h-10 mx-auto" src={quote1} alt="" />
                I have been using this art and craft website for a few years
                now, and it has been instrumental in honing my skills. The
                advanced tutorials and in-depth articles have helped me prepare
                for my art college applications. It is a goldmine of information
                for serious art students.
                <img className="h-10 mx-auto" src={quote2} alt="" />
              </div>
              <img
                className="h-24 rounded-full mx-auto mt-4"
                src="https://i.ibb.co/nQ11qWD/girl-7172289-640.jpg"
                alt=""
              />
              <p className="text-center text-deepred font-semibold text-xl">
                Sylvie Tompson
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-xl  font-semibold text-center">
                <img className="h-10 mx-auto" src={quote1} alt="" />
                As a beginner, I found this website incredibly helpful. The
                beginner-friendly projects and tips have boosted my confidence
                in art and craft. Plus, the community here is very supportive. I
                have made new friends who share the same passion for creativity.
                <img className="h-10 mx-auto" src={quote2} alt="" />
              </div>
              <img
                className="h-24 rounded-full mx-auto mt-4"
                src="https://i.ibb.co/N3rKDL3/tween-2601109-640.jpg"
                alt=""
              />
              <p className="text-center text-deepred font-semibold text-xl">
                Clark Kent
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
