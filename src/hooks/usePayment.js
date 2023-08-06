import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["payments"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  return [data, isLoading, error, refetch];
};

export default usePayment;
