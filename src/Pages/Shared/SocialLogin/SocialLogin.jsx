import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        // photoURL: result.user?.photoURL
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="text-center">
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full rounded-full text-white bg-[#3A86FF] mt-5"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
