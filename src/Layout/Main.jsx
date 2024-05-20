import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;