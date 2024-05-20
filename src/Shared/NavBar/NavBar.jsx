import logo from "../../assets/logo.png";
const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
       
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar px-8 fixed z-10 bg-opacity-10 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
                {navOptions}
            </ul>
          </div>
          <div className="btn btn-ghost flex items-center">
            <img className="h-10 shadow-xl rounded-full" src={logo} alt="" />
            <a className="text-4xl "><span className="text-[#fb6f92] font-rowdies">Sweet</span> <span className="text-[#3a86ff] font-rowdies">Bites</span></a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
