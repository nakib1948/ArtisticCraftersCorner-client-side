import { createBrowserRouter } from "react-router-dom";
import Unknownpage from "../pages/Unknownpage/Unknownpage";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import InstructorPage from "../pages/InstructorsPage/InstructorPage";
import Allclass from "../pages/Allclass/Allclass";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../pages/MySelectedClass/MySelectedClass";
import PrivateRoute from "./PrivateRoute ";
import Payment from "../pages/Payment/Payment";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import MyEnrolledCourses from "../pages/MyEnrolledCourses/MyEnrolledCourses";
import ManageUsers from "../pages/Admin/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=>fetch('http://localhost:3000/classes')
        
        },
        {
           path:'login',
           element: <Login/>,
        },
        {
          path:'signup',
          element:<Signup/>
        },
        {
            path:'instructors',
            element:<InstructorPage/>
        },
        {
            path:'classes',
            element:<Allclass/>
        }
      
  
      ],
    },
    {
        path:'dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute> ,
        children:[
            {
                path: "selectedclass",
                element: <MySelectedClass></MySelectedClass>,
              
            },
            {
              path:'payment',
              element:<Payment></Payment>
            },
            {
              path:'enrolled',
              element:<MyEnrolledCourses></MyEnrolledCourses>
            },
            {
              path:'paymenthistory',
              element:<PaymentHistory></PaymentHistory>
            },
            {
              path:'allusers',
              element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute> 
            }
        ]
    },
    {
      path:'*',
      element:<Unknownpage/>
    }
  ]);