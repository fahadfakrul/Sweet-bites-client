import { Link, useNavigate } from "react-router-dom";
import signupImg from "../../assets/auth/authentication.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            // photoURL:data.photoURL
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <>
      <Helmet>
        <title>Sweet Bites | SignUp</title>
      </Helmet>
      <div className="hero  min-h-screen  lg:p-4 bg-gradient-to-r from-blue-500 to-[#FB6F92] ">
        <div className="hero-content border rounded-md  bg-[#edf6f9] lg:px-8 shadow-xl flex-col lg:flex-row-reverse ">
          <div className="text-center md:w-1/2   lg:text-left">
            <img src={signupImg} alt="" className="w-full " />
          </div>
          <div className="card md:w-1/2 max-w-sm rounded-md shadow-2xl bg-[#caf0f8]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-bold text-center mb-2">
                Sign Up now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && <span>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/,
                  })}
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must be 6 letter password, with at least a symbol,
                    upper and lower case letters and a number
                  </p>
                )}
              </div>

              <div className="form-control mt-3">
                <input
                  className="btn btn-ghost font-cormorant font-bold text-white text-xl shadow-xl bg-[#3A86FF]  hover:text-black hover:bg-[#ffc8dd]"
                  type="submit"
                  value="Sign Up"
                  // disabled={disabled}
                />
                <Link to="/login">
                  <p className="text-center font-semibold hover:underline mt-5 text-xs">
                    Already have account? LogIn
                  </p>
                </Link>
              </div>
              <div
              className=" mt-5
"
            >
              <p className="text-center text-xs ">Or SignUp With</p>
              <SocialLogin></SocialLogin>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
