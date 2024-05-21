import infobg from "../../assets/categories/infobg.jpg"
import logo from "../../assets/logo.png"
const InfoHero = () => {
  return (
    <div>
      <div
        className="hero h-[500px] object-cover my-24"
        style={{
          backgroundImage:
            `url(${infobg})`,
        }}
      >
        <div className="hero-overlay rounded-sm bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl space-y-4">
          <div className=" flex items-center justify-center gap-2">
            <img className="h-10 shadow-xl rounded-full" src={logo} alt="" />
            <a className="text-5xl "><span className="text-[#fb6f92] font-rowdies">Sweet</span> <span className="text-[#3a86ff] font-rowdies">Bites</span></a>
          </div>
            <p className="mb-5 font-cormorant text-white text-xl font-medium">
            Welcome to SweetBites, your go-to bakery for delightful, freshly baked goods. We offer a wide variety of cakes, pastries, breads, cookies, and more, all crafted with love and the finest ingredients. Whether you need a custom cake for a special occasion or a daily treat, SweetBites has you covered.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHero;
