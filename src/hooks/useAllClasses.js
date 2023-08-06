import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["allclasses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/classes");
      return res.json();
    },
  });
  return [data, isLoading, error, refetch];
};

export default useAllClasses;
