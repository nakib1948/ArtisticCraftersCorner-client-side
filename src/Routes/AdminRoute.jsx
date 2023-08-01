import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loader from "../pages/Shared/Loader/Loader";
import { useEffect } from "react";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  
  if (loading || isAdminLoading) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  }
  // console.log('hayat')
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;