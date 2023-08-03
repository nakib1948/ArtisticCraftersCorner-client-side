import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import HeaderTitle from "../../Shared/HeaderTitle/HeaderTitle";
import UpdateClass from "./UpdateClass";
import { useNavigate } from "react-router-dom";

const Myclass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const navigate=useNavigate()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["myclass"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/instructorclasses?email=${user?.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handleClick=(id)=>{
    navigate(`/dashboard/updateclass/${id}`)

  }
  console.log(data);

  return (
    <div className="w-full">
      <HeaderTitle title="My Class"></HeaderTitle>
      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Course</th>
              <th>Enrolled</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course, index) => (
              <tr key={course._id}>
                <th>{index + 1}</th>
                <td>{course.name}</td>
                <td>{course.enrolled}</td>
                <td>{course.status}</td>
                <td>
                  <button className="btn btn-ghost">see feedback</button>
                </td>
                <th>
                  <button
                    onClick={()=>{handleClick(course._id)}}
                    className="btn bg-deepred lg:btn-sm mr-4 py-2 text-white"
                  >
                    Update
                  </button>
               
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myclass;
