import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user,loading } = useContext(AuthContext);
  
    const { data:isAdmin, isLoading:isAdminLoading, error } = useQuery({
      queryKey: ["isAdmin",user?.email],
      queryFn: async () => {
        const res = await axiosSecure(`/users/admin/${user?.email}`);
        return res.data.admin;
      },
    });
    return [isAdmin,isAdminLoading]
};

export default useAdmin;