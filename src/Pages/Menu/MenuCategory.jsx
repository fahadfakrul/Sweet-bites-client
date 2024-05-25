import { Link } from "react-router-dom";
import InfoHero from "../../Components/Infohero/InfoHero";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title , image , description }) => {
  return (
    <div className="my-20">
       {title && <InfoHero img={image} heading={title}  description={description}></InfoHero>}
      <div className="grid md:grid-cols-2 gap-10 mt-20 px-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/order/${title}`}><button className="btn btn-ghost font-cormorant font-bold text-xl shadow-xl border-b-4 border-b-[#FB6F92] mt-8 hover:text-white hover:bg-[#3A86FF]">
          Order Your Favourite Food
        </button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
