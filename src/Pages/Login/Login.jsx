import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero  min-h-screen  lg:p-5 bg-[#ffc8dd]">
      <div className="hero-content border bg-[#f5ebe0] lg:p-16 shadow-xl flex-col lg:flex-row ">
        <div className="text-center md:w-1/2   lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm rounded-md shadow-2xl bg-[#caf0f8]">
          <form onSubmit={handleLogin} className="card-body">
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
                ref={captchaRef}
                placeholder="type the captcha "
                name="captcha"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate Captcha{" "}
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-ghost font-cormorant font-bold text-white text-xl shadow-xl bg-[#3A86FF]  hover:text-black hover:bg-[#ffc8dd]"
                type="submit"
                value="Login"
                disabled={disabled}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
