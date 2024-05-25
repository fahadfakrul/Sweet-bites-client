import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.popularity === 'popular');

  return (
    <section className="my-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subheading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mt-20 px-10">
        {
            popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      <div className="flex justify-center">
      <button className="btn btn-ghost font-cormorant font-bold text-xl shadow-xl border-b-4 border-b-[#FB6F92] mt-8 hover:text-white hover:bg-[#3A86FF]">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
