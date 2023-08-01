import { Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import icon1 from "../assets/StudentDashboard/class.png";
import icon2 from "../assets/StudentDashboard/icon2.png";
import icon3 from "../assets/StudentDashboard/icon3.png";
import icon4 from "../assets/StudentDashboard/icon4.png";
import icon5 from "../assets/StudentDashboard/icon5.png";
import { faUser,faDollarSign } from "@fortawesome/free-solid-svg-icons";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
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
          {isAdmin ? (
            <>
              <li className="text-white text-lg text-center font-semibold">
                <Link to="/dashboard/selectedclass">
                  <img src={icon1} className="h-7" alt="" />
                  Manage Classes
                </Link>
              </li>
              <li className={litext}>
                <Link to="/dashboard/allusers">
                  {" "}
                  <FontAwesomeIcon style={{color: "#000000",}} size="xl" icon={faUser} />
                  Manage Users
                </Link>
              </li>
          
            </>
          ) : (
            <>
              <li className="text-white text-lg text-center font-semibold">
                <Link to="/dashboard/selectedclass">
                  <img src={icon1} className="h-7" alt="" />
                  My Selected Classes
                </Link>
              </li>
              <li className={litext}>
                <Link to="/dashboard/enrolled">
                  {" "}
                  <img src={icon1} className="h-7" alt="" />
                  My Enrolled Classes
                </Link>
              </li>
              <li className={litext}>
                <Link to="/dashboard/paymenthistory">
                  {" "}
                  <img src={icon5} className="h-7" alt="" />
                  Payment History
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className={litext}>
            <NavLink to="/">
              <img src={icon3} className="h-7" alt="" />
              Home
            </NavLink>{" "}
          </li>
          <li className={litext}>
            <NavLink to="/instructors">
              <img src={icon2} className="h-7" alt="" /> Instructors
            </NavLink>
          </li>
          <li className={litext}>
            <NavLink to="/classes">
              {" "}
              <img src={icon1} className="h-7" alt="" />
              Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
