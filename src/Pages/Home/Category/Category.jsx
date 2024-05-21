import cakes from "../../../assets/categories/cakes.jpg";
import pastries from "../../../assets/categories/pastries.jpg";
import breads from "../../../assets/categories/breads.jpg";
import muffins from "../../../assets/categories/muffins.jpg";
import donuts from "../../../assets/categories/donuts.jpg";
import cookies from "../../../assets/categories/cookies.jpg";
import savory from "../../../assets/categories/savory.jpg";
import pies from "../../../assets/categories/pies.jpg";
import special from "../../../assets/categories/special.jpg";
import beverages from "../../../assets/categories/beverage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <section>
        <SectionTitle subheading={"From 10.00 am to 11.00pm"} heading={"Order Online"}></SectionTitle>
        <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      autoplay={true}
      loop={true}
      modules={[Pagination ,Autoplay]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={cakes} alt="" />
        
        <h3 className="text-4xl uppercase text-black text-center font-cormorant font-semibold -mt-20">
          Cakes
        </h3>
        
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={pastries} alt="" />{" "}
        <h3 className="text-4xl uppercase  text-white text-center font-cormorant font-semibold -mt-20">
         Pastries
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={muffins} alt="" />
        <h3 className="text-4xl uppercase text-black text-center font-cormorant font-semibold -mt-20">
          Muffins
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={breads} alt="" />
        <h3 className="text-4xl uppercase text-white text-center font-cormorant font-semibold -mt-20">
          Breads
        </h3>
      </SwiperSlide>
      
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={pies} alt="" />
        <h3 className="text-4xl uppercase text-black text-center font-cormorant font-semibold -mt-20">
          Pies
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={cookies} alt="" />
        <h3 className="text-4xl uppercase text-white text-center font-cormorant font-semibold -mt-20">
          Cookies
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={donuts} alt="" />
        <h3 className="text-4xl uppercase text-black text-center font-cormorant font-semibold -mt-20">
          Donuts
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={savory} alt="" />
        <h3 className="text-4xl uppercase text-white text-center font-cormorant font-semibold -mt-20">
          Savory Bakes
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={special} alt="" />
        <h3 className="text-4xl uppercase text-black text-center font-cormorant font-semibold -mt-20">
          Holiday Special
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[450px] rounded-sm" src={beverages} alt="" />
        <h3 className="text-4xl uppercase text-white text-center font-cormorant font-semibold -mt-20">
          Beverages
        </h3>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
