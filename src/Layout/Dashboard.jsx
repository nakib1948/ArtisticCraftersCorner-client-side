import {  Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import icon1 from "../assets/StudentDashboard/icon1.png";
import icon2 from "../assets/StudentDashboard/icon2.png";
import icon3 from "../assets/StudentDashboard/icon3.png";
import icon4 from "../assets/StudentDashboard/icon4.png";
import icon5 from "../assets/StudentDashboard/icon5.png";
import icon6 from "../assets/StudentDashboard/icon6.png";
import icon7 from "../assets/StudentDashboard/icon7.png";
import { faUser,faDollarSign } from "@fortawesome/free-solid-svg-icons";
import useAdmin from "../hooks/useAdmin";
import ActiveLink from "../Routes/ActiveLink/ActiveLink";

const Dashboard = () => {
  const [isRole] = useAdmin();

  const litext = "text-white text-lg text-center font-semibold my-1 ";
  const Litext="group hover:bg-transparent hover:text-white "

  return (
    <div className="drawer lg:drawer-open gap-3">
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
        <ul className="menu p-4 w-80 h-full bg-gray-800  text-base-content">
          {/* Sidebar content here */}

          <p className="text-white text-xl text-center font-bold">
            Summer Camp
          </p>
          <p className="text-white text-xl text-center font-serif ">
            Learning School
          </p>

          <img src={icon4} className="w-20 mb-20 mx-auto" alt="" />
          {isRole=='admin' ? (
            <>
              <li className="text-white text-lg text-center font-semibold">
                <ActiveLink to="/dashboard/manageclasses" className={Litext}>
                  <img src={icon1} className="h-7" alt="" />
                  Manage Classes
                </ActiveLink>
              </li>
              <li className={litext}>
                <ActiveLink to="/dashboard/allusers" className={Litext}>
                <img src={icon7} className="h-9" alt="" />
                  Manage Users
                </ActiveLink>
              </li>
          
            </>
          ) : isRole=='user'? (
            <>
              <li className="text-white text-lg text-center font-semibold">
                <ActiveLink to="/dashboard/selectedclass" className={Litext}>
                  <img src={icon1} className="h-7" alt="" />
                  My Selected Classes
                </ActiveLink>
              </li>
              <li className={litext}>
                <ActiveLink to="/dashboard/enrolled" className={Litext}>
                  {" "}
                  <img src={icon1} className="h-7" alt="" />
                  My Enrolled Classes
                </ActiveLink>
              </li>
              <li className={litext}>
                <ActiveLink to="/dashboard/paymenthistory" className={Litext}>
                  {" "}
                  <img src={icon5} className="h-7" alt="" />
                  Payment History
                </ActiveLink>
              </li>
            </>
          ) :(
            <>
              <li className={litext}>
                <ActiveLink to="/dashboard/addclass" className={Litext}>
                  <img src={icon6} className="h-9" alt="" />
                  Add Class
                </ActiveLink>
              </li>
              <li className={litext}>
                <ActiveLink to="/dashboard/myclass" className={Litext}>
                  {" "}
                  <img src={icon1} className="h-7 " alt="" />
                  My Classes
                </ActiveLink>
              </li>
            
            </>
          )}

          <li className={litext}>
            <ActiveLink to="/" className={Litext}>
              <img src={icon3} className="h-7" alt="" />
              Home
            </ActiveLink>{" "}
          </li>
          <li className={litext}>
            <ActiveLink to="/instructors" className={Litext}>
              <img src={icon2} className="h-7" alt="" /> Instructors
            </ActiveLink>
          </li>
          <li className={litext}>
            <ActiveLink to="/classes" className={Litext}>
              {" "}
              <img src={icon1} className="h-7" alt="" />
              Classes
            </ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
