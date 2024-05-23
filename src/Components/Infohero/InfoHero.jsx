import { Parallax } from "react-parallax";

const InfoHero = ({ description, heading, img }) => {
  return (
    <div className="mb-10">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        
        bgImageAlt="the menu"
        strength={-200}
      >
        <div 
          className="hero h-[550px] bg-fixed object-cover "
          
        >
          <div className="hero-overlay rounded-sm bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-5xl space-y-4">
              <div className=" flex items-center justify-center gap-2">
                <h3 className="text-white text-7xl font-cormorant capitalize font-bold">
                  {heading}
                </h3>
              </div>
              <p className="mb-5 font-cormorant text-white text-xl font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default InfoHero;
