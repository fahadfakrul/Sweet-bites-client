const MenuItem = ({ item }) => {
  const { image, price, name, description } = item;
  return (
    <div className="flex space-x-2">
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] object-cover" src={image} alt="" />
      <div className="flex-1" >
        <h3 className="uppercase">{name}------------------</h3>
        <p >{description}</p>
      </div>
      <p className="text-[#3A86FF] font-normal text-xl ">${price}</p>
    </div>
  );
};

export default MenuItem;
