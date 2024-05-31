import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaClipboardCheck, FaDollarSign, FaUsers, FaUtensils } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
      
    },
  });
  return (
    <div>
      <h2 className="text-3xl mb-5">
        <span>Hi, Welcome</span> {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow gap-16">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-4xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
          
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaUsers className="text-4xl"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaClipboardCheck className="text-3xl"></FaClipboardCheck>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
         
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaUtensils className="text-4xl"></FaUtensils>
          </div>
          <div className="stat-title">Items</div>
          <div className="stat-value">{stats.menuItems}</div>
         
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
