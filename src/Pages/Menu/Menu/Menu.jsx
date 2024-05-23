import { Helmet } from "react-helmet-async";
import InfoHero from "../../../Components/Infohero/InfoHero";
import menuImg from "../../../assets/menu/menu.jpg"
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import cakesImg from "../../../assets/categories/cakes1.jpg"
import pastriesImg from "../../../assets/categories/pastries.jpg";
import breadsImg from "../../../assets/categories/breads.jpg";
import muffinsImg from "../../../assets/categories/muffins.jpg";
import donutsImg from "../../../assets/categories/donuts.jpg";
import cookiesImg from "../../../assets/categories/cookies2.jpg";
import savoryImg from "../../../assets/categories/savory.jpg";
import piesImg from "../../../assets/categories/pies2.jpg";
import specialImg from "../../../assets/categories/special.jpg";
import beveragesImg from "../../../assets/categories/beverages2.jpg";
const Menu = () => {
  const [menu] = useMenu();
  const cakes = menu.filter(item =>  item.category === 'cakes')
  const cookies = menu.filter(item =>  item.category === 'cookies')
  const beverages = menu.filter(item =>  item.category === 'beverages')
  const pies = menu.filter(item =>  item.category === 'pies')
  const breads = menu.filter(item =>  item.category === 'breads')
  const donuts = menu.filter(item =>  item.category === 'donuts')
  const savoryBakes = menu.filter(item =>  item.category === 'savory bakes')
  const holidaySpecials = menu.filter(item =>  item.category === 'holiday specials')
  const pastries= menu.filter(item =>  item.category === 'pastries')
  const muffins= menu.filter(item =>  item.category === 'muffins')
  const offered= menu.filter(item =>  item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Sweet Bites | Menu</title>
      </Helmet>
      <InfoHero heading={"Our Menu"} img={menuImg}></InfoHero>
      <SectionTitle heading={"Today's offer"} subheading={"Don't Miss"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={cakes} title={"cakes"} image={cakesImg} description={"Indulge in our delightful selection of cakes, each crafted to perfection for a sweet and memorable treat."}></MenuCategory>
      <MenuCategory items={cookies} title={"cookies"} image={cookiesImg} description={"Treat yourself to our irresistible cookies, each one baked with love and the finest ingredients."}></MenuCategory>
      <MenuCategory items={pastries} title={"pastries"} image={pastriesImg} description={"Enjoy our assortment of pastries, baked fresh daily to bring you the perfect balance of flaky and flavorful."}></MenuCategory>
      <MenuCategory items={muffins} title={"muffins"} image={muffinsImg} description={"Start your day right with our delicious muffins, bursting with fresh ingredients and baked to perfection."}></MenuCategory>
      <MenuCategory items={donuts} title={"donuts"} image={donutsImg} description={"Delight in our selection of donuts, from classic glazed to creative flavors, perfect for any time of day."}></MenuCategory>
      <MenuCategory items={pies} title={"pies"} image={piesImg} description={"Savor our scrumptious pies, featuring flaky crusts and rich, delectable fillings for every occasion."}></MenuCategory>
      <MenuCategory items={breads} title={"breads"} image={breadsImg} description={"Our selection of breads includes artisan creations that are perfect for any occasion. Enjoy the crispy crust and tangy interior of our breads."}></MenuCategory>
      <MenuCategory items={savoryBakes} title={"savory bakes"} image={savoryImg
      } description={"Discover our savory bakes, offering a variety of flavorful and satisfying options for a hearty snack or meal."}></MenuCategory>
      <MenuCategory items={holidaySpecials} title={"holiday specials"} image={specialImg} description={"Celebrate the season with our holiday specials, featuring festive flavors and treats to make your holidays extra special."}></MenuCategory>
      <MenuCategory items={beverages} title={"beverages"} image={beveragesImg} description={"Quench your thirst with our refreshing beverages, from rich coffees to fruity smoothies, perfectly paired with any treat."}></MenuCategory>
      
    </div>
  );
};

export default Menu;
