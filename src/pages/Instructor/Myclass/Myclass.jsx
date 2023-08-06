import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import HeaderTitle from "../../Shared/HeaderTitle/HeaderTitle";
import UpdateClass from "./UpdateClass";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Myclass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

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
  const handleClick = (id) => {
    navigate(`/dashboard/updateclass/${id}`);
  };

  return (
    <div className="w-full card">
      <Helmet>
        <title>ArtisticCraftersCorner | Instructordashboard</title>
      </Helmet>
      <HeaderTitle title="My Class"></HeaderTitle>
      <div className="overflow-x-auto card-body bg-slate-200 rounded-xl m-5">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-base">
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
              <tr className="text-base" key={course._id}>
                <th>{index + 1}</th>
                <td>{course.name}</td>
                <td>{course.enrolled}</td>
                <td>{course.status == "deny" ? "denied" : course.status}</td>
                <td>
                  <button
                    className="btn bg-deepred text-white font-semibold"
                    onClick={() => window[course._id].showModal()}
                  >
                    see feedback
                  </button>
                  <dialog
                    id={`${course._id}`}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <form method="dialog" className="modal-box">
                      <h3 className="font-bold text-lg">FeedBack</h3>
                      <p className="py-4 text-xl">{course.feedback}</p>
                      <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </div>
                    </form>
                  </dialog>
                </td>
                <th>
                  <button
                    disabled={course.status != "pending"}
                    onClick={() => {
                      handleClick(course._id);
                    }}
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
