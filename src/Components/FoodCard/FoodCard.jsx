
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, price, name, description, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()


  const handleAddToCart = () => {
    if(user && user.email){
         const cartItem = {
          menuId: _id,
          email: user.email,
           name, image, price
         }
         axiosSecure.post('/carts', cartItem)
         .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
          }
         })
    }else{
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state: {from: location}})
        }
      });
    }
  }
  return (
    <div className="card rounded-md w-96  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      
      </figure>
      <p className="absolute right-0 mt-4 mr-3 px-4  rounded-sm text-white bg-[#3A86FF]">${price}</p>
      <div className="card-body space-y-4 bg-[#edede9]">
        <div className="flex justify-center">
          <h2 className="card-title text-xl font-rowdies ">{name}</h2>
        </div>
        <p className="text-[#3A86FF]">{description}</p>
        <div className="card-actions justify-center">
          <button onClick={ handleAddToCart} className="btn btn-ghost border border-b-4 border-b-[#FB6F92] hover:text-white hover:bg-[#3A86FF]">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
