import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data.image);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {'content-type':'multipart/form-data'},
    });
    console.log(res.data);
    if(res.data.success){
       const menuItem ={
        name: data.name,
        category: data.category,
        image: res.data.data.display_url,
        price: parseFloat(data.price) ,
        description: data.description,
        popularity: data.popularity,
       }
       const menuRes = await axiosSecure.post('/menu', menuItem)
       console.log(menuRes.data);
       if (menuRes.data.insertedId){
        reset(  )
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} Added Successfully`,
          showConfirmButton: false,
          timer: 1500
        });
       }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"Add an item"}
        subheading={"What's new?"}
      ></SectionTitle>

      <div>
        <form className="lg:px-40 " onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text">Item Name*</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value="default">
                  Select a category...
                </option>
                <option value="cakes">Cake</option>
                <option value="breads">Bread</option>
                <option value="donuts">Donut</option>
                <option value="cookies">Cookie</option>
                <option value="pastries">Pastry</option>
                <option value="pies">Pie</option>
                <option value="muffins">Muffin</option>
                <option value="beverages">Beverage</option>
                <option value="savory bakes">Savory Bake</option>
                <option value="holiday specials">Holiday Special</option>
                <option value="offered">Offer</option>
              </select>
            </div>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text">Item Price*</span>
              </label>
              <input
                type="number"
                step=".01"
                placeholder="Item Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <label className="form-control mb-6">
            <div className="label">
              <span className="label-text">Item Description*</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Description"
              {...register("description", { required: true })}
            ></textarea>
          </label>
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text">Popularity</span>
            </label>
            <select
              defaultValue="default"
              {...register("popularity", { required: true })}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled value="default">
                Popularity
              </option>
              <option value="popular">Popular</option>
              <option value="unpopular">Not so popular</option>
            </select>
          </div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full  "
          />
          <br />
          <button className="btn mt-6 text-white bg-gradient-to-r from-[#FB6F92] to-blue-500 ">
            Add Item<FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
