import img1 from "../../../assets/banner/banner1.jpg";
import img2 from "../../../assets/banner/banner2.jpg";
import img3 from "../../../assets/banner/banner3.jpg";
import img4 from "../../../assets/banner/banner4.jpg";
import img5 from "../../../assets/banner/banner5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const carouselStyle = {
    height: '550px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const imageStyle = {
    maxHeight: '100%',
    objectFit: 'cover'
  };
  return (
    <Carousel
      autoPlay={true}
      dynamicHeight={true}
      interval={3000}
      infiniteLoop={true}
      showStatus={false}
      transitionTime={1000}
    >
      <div style={carouselStyle}>
        <img className="rounded-sm object-cover  image" src={img1} style={imageStyle}/>
      </div>
      <div style={carouselStyle}>
        <img className="rounded-sm object-cover" src={img2} style={imageStyle} />
      </div>
      <div style={carouselStyle}>
        <img className="rounded-sm object-cover" src={img3} style={imageStyle}/>
      </div>
      <div style={carouselStyle}>
        <img className="rounded-sm object-cover" src={img4} style={imageStyle}/>
      </div>
      <div style={carouselStyle}>
        <img className="rounded-sm object-cover" src={img5} style={imageStyle}/>
      </div>
    </Carousel>
  );
};

export default Banner;
