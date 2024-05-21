import InfoHero from "../../../Components/Infohero/InfoHero";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      
      <div className="max-w-screen-xl mx-auto">
      <Banner></Banner>
        <Category></Category>
        <InfoHero></InfoHero>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
