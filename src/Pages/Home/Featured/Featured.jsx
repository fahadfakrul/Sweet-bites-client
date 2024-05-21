import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/categories/featured.jpg"
import "./featured.css"
const Featured = () => {
    return (
        <div className="featured-item bg-fixed py-5 px-28 my-12 rounded-sm">
            <SectionTitle heading={"Holiday Special"} subheading={"Check it out"}></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16">
                <div  >
                <img src={featuredImg} alt="featured" className="" />
                </div>
                <div className="md:ml-10 text-black ">
                    <p className="text-xl font-cormorant font-bold">Dec 25, 2024</p>
                    <p className="text-xl uppercase font-cormorant font-bold">Where can i get some?</p>
                    <p className="text-xl font-cormorant font-bold ">Our Holiday Special Cherry Pie is a festive treat bursting with juicy cherries and wrapped in a flaky, golden crust. Perfectly spiced with a hint of cinnamon, this pie is a delightful way to celebrate the season. Indulge in the warmth and cheer of our handcrafted holiday delight!</p>
                    <button className="btn btn-ghost font-cormorant font-bold text-xl shadow-xl border-b-4 border-b-[#FB6F92]">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;