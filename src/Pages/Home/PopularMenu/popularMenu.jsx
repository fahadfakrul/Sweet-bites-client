import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(item => item.popularity === 'popular');
        setMenu(popularItems);
      });
      console.log(menu)
  }, []);
  return (
    <section className="my-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subheading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mt-20 px-10">
        {
            menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      <div className="flex justify-center">
      <button className="btn btn-ghost font-cormorant font-bold text-xl shadow-xl border-b-4 border-b-[#FB6F92] mt-8">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
