import { Helmet } from "react-helmet-async";
import InfoHero from "../../../Components/Infohero/InfoHero";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import infobg from "../../../assets/categories/infobg.jpg";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sweet Bites | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <InfoHero
          description={
            " Welcome to SweetBites, your go-to bakery for delightful, freshly baked goods. We offer a wide variety of cakes, pastries, breads, cookies, and more, all crafted with love and the finest ingredients. Whether you need a custom cake for a special occasion or a daily treat, SweetBites has you covered."
          }
          heading={"Sweet Bites"}
          img={infobg}
        ></InfoHero>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
