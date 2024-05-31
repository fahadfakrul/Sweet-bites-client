import { FaCalendar, FaCalendarCheck, FaComment, FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaEnvelope, FaList,  FaUsers, FaUtensils} from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  //TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen p-5 bg-gradient-to-r from-[#FB6F92] to-blue-500 ">
        <ul className="menu uppercase text-lg font-semibold text-white">
         {
          isAdmin ? <><li>
          <NavLink to="/dashboard/adminHome">
            <FaHome></FaHome> Admin Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/addItems">
            <FaUtensils></FaUtensils> Add Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/manageItems">
            <FaList></FaList> Manage Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/bookings">
            <FaBook></FaBook> Manage Bookngs
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/users">
            <FaUsers></FaUsers> All Users
          </NavLink>
          <div className="divider"></div>
        </li></> : <> <li>
          <NavLink to="/dashboard/userHome">
            <FaHome></FaHome> User Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/bookings">
            <FaCalendar></FaCalendar> Bookings
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/cart">
            <FaShoppingCart></FaShoppingCart> My cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/review">
            <FaComment></FaComment> Add Review
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/paymentHistory">
            <FaCalendarCheck></FaCalendarCheck> Payment History
          </NavLink>
          <div className="divider"></div>
        </li></>
         }
          
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <IoMdMenu></IoMdMenu> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/cakes">
              <FaShoppingBag></FaShoppingBag> Order
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
