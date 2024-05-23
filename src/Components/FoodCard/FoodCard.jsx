const FoodCard = ({ item }) => {
  const { image, price, name, description } = item;
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
          <button className="btn btn-ghost border border-b-4 border-b-[#FB6F92] hover:text-white hover:bg-[#3A86FF]">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
