import InfoHero from "../../../Components/Infohero/InfoHero";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      
      <div className="max-w-screen-xl mx-auto">
      <Banner></Banner>
        <Category></Category>
        <InfoHero></InfoHero>
      </div>
    </div>
  );
};

export default Home;
