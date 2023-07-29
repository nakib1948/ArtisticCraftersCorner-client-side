import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import icon1 from "../assets/StudentDashboard/class.png";
import icon2 from "../assets/StudentDashboard/icon2.png";
import icon3 from "../assets/StudentDashboard/icon3.png";
import icon4 from "../assets/StudentDashboard/icon4.png";

const Dashboard = () => {
  const isAdmin = false;
  const litext = "text-white text-lg text-center font-semibold";

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn bg-deepred text-white drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>

      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-deepred  text-base-content">
          {/* Sidebar content here */}

          <p className="text-white text-xl text-center font-bold">
            Summer Camp
          </p>
          <p className="text-white text-xl text-center font-serif ">
            Learning School
           
          </p>

          <img src={icon4} className="w-20 mb-20 mx-auto" alt="" />
        
          <li className="text-white text-lg text-center font-semibold">
            <a>
              <img src={icon1} className="h-7" alt="" />
              My Selected Classes
            </a>
          </li>
          <li className={litext}>
            <a>
              {" "}
              <img src={icon1} className="h-7" alt="" />
              My Enrolled Classes
            </a>
          </li>

          <div className="divider"></div>
          <li className={litext}>
            <NavLink to="/">
            <img src={icon3} className="h-7" alt="" />Home
            </NavLink>{" "}
          </li>
          <li className={litext}>
            <NavLink to="/instructors">
              <img src={icon2} className="h-7" alt="" /> Instructors
            </NavLink>
          </li>
          <li className={litext}>
            <NavLink to="/classes">  <img src={icon1} className="h-7" alt="" />Classes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
