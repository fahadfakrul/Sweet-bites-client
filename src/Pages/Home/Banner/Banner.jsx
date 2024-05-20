import img1 from '../../../assets/banner/banner1.jpg'
import img2 from '../../../assets/banner/banner2.jpg'
import img3 from '../../../assets/banner/banner3.jpg'
import img4 from '../../../assets/banner/banner4.jpg'
import img5 from '../../../assets/banner/banner5.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
       
             <Carousel  autoPlay={true} dynamicHeight={true}  interval={3000} infiniteLoop={true} showStatus={false} transitionTime={1000}>
                <div>
                    <img className='rounded-lg object-cover ' src={img1}  />
                    
                </div>
                <div>
                    <img className='rounded-lg object-cover' src={img2} />
                    
                </div>
                <div>
                    <img className='rounded-lg object-cover' src={img3} />
                    
                </div>
                <div>
                    <img className='rounded-lg object-cover' src={img4} />
                    
                </div>
                <div>
                    <img className='rounded-lg object-cover' src={img5} />
                    
                </div>
            </Carousel>
        
    );
};

export default Banner;