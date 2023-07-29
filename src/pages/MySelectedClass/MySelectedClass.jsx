import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import HeaderTitle from "../Shared/HeaderTitle/HeaderTitle";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import MyclassTable from "./MyclassTable";

const MySelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user}=useContext(AuthContext)

    const { data, isLoading, error } = useQuery({
        queryKey: ["myclasses"],
        queryFn: async () => {
          const res = await axiosSecure(`/selectedclasses?email=${user?.email}`);
          return res.data;
        },
      });

      
      if (isLoading) {
        return (
          <div className="text-center mt-20">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        );
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      console.log(data)


    return (
        <div>
            <HeaderTitle title="My Selected Clasees"></HeaderTitle>

            <div className="overflow-x-auto mt-10 bg-base-200">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-base text-purple ">NO.</th>
                  <th className="text-base text-purple ">Image</th>
                  <th className="text-base text-purple ">Course Name</th>
                  <th className="text-base text-purple ">Instructor</th>
                  <th className="text-base text-purple ">availableSeats</th>
                  <th className="text-base text-purple ">Price</th>
                  <th className="text-base text-purple ">enrolled</th>
                  <th className="text-base text-purple ">Payment</th>

                </tr>
              </thead>
              <tbody>
                {data
                  .map((classes, index) => (
                    <MyclassTable
                    key={index}
                    id={index}
                    classes={classes}
                   
                    ></MyclassTable>
                  ))}
              </tbody>
            </table>
          </div>

        </div>
    );
};

export default MySelectedClass;