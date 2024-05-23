import { Helmet } from "react-helmet-async";
import InfoHero from "../../../Components/Infohero/InfoHero";
import orderCover from "../../../assets/categories/page3.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ["cakes", "cookies", "pastries", "muffins", "donuts", "pies", "breads", "savory bakes", "holiday specials", "beverages"]
    const {category} = useParams()
    const categoryIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(categoryIndex);
  const [menu] = useMenu();
  
  const cakes = menu.filter((item) => item.category === "cakes");
  const cookies = menu.filter((item) => item.category === "cookies");
  const beverages = menu.filter((item) => item.category === "beverages");
  const pies = menu.filter((item) => item.category === "pies");
  const breads = menu.filter((item) => item.category === "breads");
  const donuts = menu.filter((item) => item.category === "donuts");
  const savoryBakes = menu.filter((item) => item.category === "savory bakes");
  const holidaySpecials = menu.filter(
    (item) => item.category === "holiday specials"
  );
  const pastries = menu.filter((item) => item.category === "pastries");
  const muffins = menu.filter((item) => item.category === "muffins");
 
  return (
    <div>
      <Helmet>
        <title>Sweet Bites | Order Now</title>
      </Helmet>
      <InfoHero heading={"Our Shop"} img={orderCover}></InfoHero>
      <Tabs
        className={
          "max-w-screen-xl  mx-auto text-center font-bold text-[#FB6F92]"
        }
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList 
        >
          <Tab>Cakes</Tab>
          <Tab>Cookies</Tab>
          <Tab>Pastries</Tab>
          <Tab>Muffins</Tab>
          <Tab>Donuts</Tab>
          <Tab>Pies</Tab>
          <Tab>Breads</Tab>
          <Tab>Savory Bakes</Tab>
          <Tab>Holiday Specials</Tab>
          <Tab>Beverages</Tab>
        </TabList>
        <TabPanel>
          <OrderTab item={cakes}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={cookies}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={pastries}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={muffins}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={donuts}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={pies}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={breads}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={savoryBakes}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={holidaySpecials}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab item={beverages}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
