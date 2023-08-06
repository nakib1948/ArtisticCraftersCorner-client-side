import { useQuery } from "@tanstack/react-query";
import HeaderTitle from "../../Shared/HeaderTitle/HeaderTitle";
import Loader from "../../Shared/Loader/Loader";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Pagination from "../../Shared/Pagination/Pagination";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
  const [id, setId] = useState(null);
  const [axiosSecure] = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["manageclass"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-server-side.vercel.app/manageclass");
      return res.json();
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  const approveSubmit = (id) => {
    const data = { status: "approved", id };
    axiosSecure.patch(`/statupdate`, data).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `approved!!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  const DenySubmit = (id) => {
    const data = { status: "deny", id };
    axiosSecure.patch(`/statupdate`, data).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `denied!!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const data = { feedback: form.feedback.value, id };
    axiosSecure.patch(`/feedback`, data).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Feedback send!!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="w-full card">
      <Helmet>
        <title>ArtisticCraftersCorner | Admindashboard</title>
      </Helmet>
      <HeaderTitle title="Manage Classes"></HeaderTitle>
      <div className="overflow-x-auto card-body rounded-xl bg-slate-300">
        <table className="table">
          <thead>
            <tr className="text-base">
              <th className="text-base text-purple ">NO.</th>
              <th className="text-base text-purple ">Class Image</th>
              <th className="text-base text-purple ">Class Name</th>
              <th className="text-base text-purple ">Instructor Name</th>
              <th className="text-base text-purple ">Instructor email</th>
              <th className="text-base text-purple "> Seats</th>
              <th className="text-base text-purple ">Price</th>
              <th className="text-base text-purple ">Status</th>
              <th className="text-base text-purple ">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((course, index) => (
              <tr key={course._id} className="text-base">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={course.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{course.name}</td>
                <td>{course.instructor}</td>
                <td>{course.instructorEmail}</td>
                <td>{course.availableSeats}</td>
                <td>{course.price}$</td>
                <td>{course.status}</td>
                <td>
                  <button
                    onClick={() => {
                      approveSubmit(course._id);
                    }}
                    disabled={
                      course.status == "approved" || course.status == "deny"
                    }
                    className="btn bg-deepred lg:btn-sm mr-4 py-2 text-white"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => {
                      DenySubmit(course._id);
                    }}
                    disabled={
                      course.status == "approved" || course.status == "deny"
                    }
                    className="btn my-1 bg-red-500 lg:btn-sm mr-4 py-2 text-white"
                  >
                    Deny
                  </button>
                  <label
                    htmlFor={`${course._id}`}
                    className="btn bg-deepred lg:btn-sm mr-4 py-2 text-white"
                  >
                    Feedback
                  </label>
                  <input
                    type="checkbox"
                    id={`${course._id}`}
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <form onSubmit={handleSubmit}>
                        <textarea
                          name="feedback"
                          onChange={() => {
                            setId(course._id);
                          }}
                          className="textarea w-full textarea-primary"
                          placeholder={`write feedback to ${course.instructor}....`}
                        ></textarea>
                        <input
                          type="submit"
                          value="Send Feedback"
                          className="btn btn-block bg-deepred  text-white font-semibold  mt-4"
                        />
                      </form>
                    </div>
                    <label className="modal-backdrop" htmlFor={`${course._id}`}>
                      Close
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default ManageClass;
