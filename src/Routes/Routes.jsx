import { createBrowserRouter } from "react-router-dom";
import Unknownpage from "../pages/Unknownpage/Unknownpage";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import InstructorPage from "../pages/InstructorsPage/InstructorPage";


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
        }
      
  
      ],
    },
    {
      path:'*',
      element:<Unknownpage/>
    }
  ]);