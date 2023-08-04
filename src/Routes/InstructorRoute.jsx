import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loader from "../pages/Shared/Loader/Loader";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isRole, isRoleLoading] = useAdmin();
  const location = useLocation();
  
  if (loading || isRoleLoading) {
    return <Loader />;
  }

  if (user && isRole=='instructor') {
    return children;
  }
   console.log(isRole)
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
