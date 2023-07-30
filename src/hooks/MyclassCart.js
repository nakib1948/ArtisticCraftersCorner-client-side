import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyclassCart = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user,loading } = useContext(AuthContext);
  
    const { data, isLoading, error, refetch } = useQuery({
      queryKey: ["myclasses"],
      enabled:!loading,
      queryFn: async () => {
        const res = await axiosSecure(`/selectedclasses?email=${user?.email}`);
        return res.data;
      },
    });
    return [data,isLoading,error,refetch]
};

export default MyclassCart;