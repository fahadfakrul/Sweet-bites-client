

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="mx-auto text-center  my-8"> 
            <p className="text-[#FB6F92] text-xl mb-3 ">---{subheading}---</p>
            <h3 className="text-black text-4xl uppercase border-y-4 py-4 font-cormorant font-medium">{heading}</h3>
        </div>
    );
};

export default SectionTitle;