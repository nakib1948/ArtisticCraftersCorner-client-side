import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";


// import required modules
import { Pagination } from 'swiper/modules';
import HeaderTitle from '../../Shared/HeaderTitle/HeaderTitle';
const AlumaniWork = () => {
  return (
    <div className="my-10">
    <HeaderTitle title="Our Alumni Work"></HeaderTitle>
      <p className="text-gray-500 font-semibold text-lg my-5 text-center">
        Explore the creative accomplishments of our alumni who have successfully <br/>
        completed our Art and Craft course
      </p>

      <Swiper
       
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
            768: {
              slidesPerView: 1,
            },
  
            992: {
              slidesPerView: 3,
            },
          }}
        className="mySwiper pb-10"
      >
         <SwiperSlide>
            <img className='h-96' src="https://i.ibb.co/pPgqC2z/pexels-pixabay-219552.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide> <img  className='h-96' src="https://i.ibb.co/jR8mCrd/pexels-shonejai-1227497.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='h-96' src="https://i.ibb.co/3mdLd7T/pexels-pixabay-159862.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='h-96' src="https://i.ibb.co/rG9W31V/pexels-magda-ehlers-2590964.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='h-96 w-full' src="https://i.ibb.co/hCv556h/pexels-roman-odintsov-8063850.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AlumaniWork;
