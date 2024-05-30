import { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/auth/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login successful",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sweet Bites | LogIn</title>
      </Helmet>
      <div className="hero  min-h-screen  lg:p-4 bg-[#ffc8dd]">
        <div className="hero-content border rounded-md  bg-[#edf6f9] lg:p-8 shadow-xl flex-col lg:flex-row ">
          <div className="text-center md:w-1/2   lg:text-left">
            <img src={loginImg} alt="" className="w-full " />
          </div>
          <div className="card md:w-1/2 max-w-sm rounded-md shadow-2xl bg-[#caf0f8]">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center mb-2">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label  ">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  placeholder="type the captcha text"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-ghost font-cormorant font-bold text-white text-xl shadow-xl bg-[#3A86FF]  hover:text-black hover:bg-[#ffc8dd]"
                  type="submit"
                  value="Login"
                  disabled={disabled}
                />

                <Link to="/signup">
                  <p className="text-center font-semibold hover:underline mt-5 text-xs">
                    New Here? Sign Up
                  </p>
                </Link>
              </div>
            </form>
            <div className="p-10">
              <p className="text-center text-xs ">Or Login With</p>

              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
