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
import AddClass from "../pages/Instructor/AddClass/AddClass";
import Myclass from "../pages/Instructor/Myclass/Myclass";
import UpdateClass from "../pages/Instructor/Myclass/UpdateClass";
import ManageClass from "../pages/Admin/ManageClass/ManageClass";
import InstructorRoute from "./InstructorRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "instructors",
        element: <InstructorPage />,
      },
      {
        path: "classes",
        element: <Allclass />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "selectedclass",
        element: (
          <PrivateRoute>
            {" "}
            <MySelectedClass></MySelectedClass>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            {" "}
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "enrolled",
        element: (
          <PrivateRoute>
            {" "}
            <MyEnrolledCourses></MyEnrolledCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <PrivateRoute>
            {" "}
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <Myclass></Myclass>
          </InstructorRoute>
        ),
      },
      {
        path: "updateclass/:id",
        element: (
          <InstructorRoute>
            <UpdateClass></UpdateClass>
          </InstructorRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Unknownpage />,
  },
]);
