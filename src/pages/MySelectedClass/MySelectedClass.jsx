import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import HeaderTitle from "../Shared/HeaderTitle/HeaderTitle";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import MyclassTable from "./MyclassTable";
import { Link } from "react-router-dom";
import MyclassCart from "../../hooks/MyclassCart";
import Loader from "../Shared/Loader/Loader";

const MySelectedClass = () => {
  const [data, isLoading, error, refetch] = MyclassCart();

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.length)
    return <HeaderTitle title="You have no selected courses"></HeaderTitle>;

  return (
    <div>
      <HeaderTitle title="My Selected Clasees"></HeaderTitle>
      <Link
        to="/dashboard/payment"
        className="btn bg-deepred lg:btn-md font-bold mr-4 text-white"
      >
        Payment
      </Link>
      <div className="card">
        <div className="overflow-x-auto mt-10 card-body bg-slate-300 rounded-xl">
          <table className="table">
            <thead>
              <tr>
                <th className="text-base text-purple ">NO.</th>
                <th className="text-base text-purple ">Image</th>
                <th className="text-base text-purple ">Course Name</th>
                <th className="text-base text-purple ">Instructor</th>
                <th className="text-base text-purple ">AvailableSeats</th>
                <th className="text-base text-purple ">Price</th>
                <th className="text-base text-purple ">Enrolled</th>
                <th className="text-base text-purple ">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((classes, index) => (
                <MyclassTable
                  key={index}
                  id={index}
                  classes={classes}
                  refetch={refetch}
                ></MyclassTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClass;
