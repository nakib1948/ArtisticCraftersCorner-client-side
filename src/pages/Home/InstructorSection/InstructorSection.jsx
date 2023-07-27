import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const InstructorSection = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/instructor", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="my-10">
      <p className="text-center text-red-400 text-4xl font-semibold mb-10">
        Our Famous Instructors
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper pb-10"
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
      >
        {instructors.map((data, index) => (
          <SwiperSlide key={index}>
            <img className="h-80" src={data.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstructorSection;
