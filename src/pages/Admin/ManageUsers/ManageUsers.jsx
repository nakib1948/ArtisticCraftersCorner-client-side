import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import HeaderTitle from "../../Shared/HeaderTitle/HeaderTitle";
import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../Shared/Pagination/Pagination";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: users = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleMakeAdmin = (user) => {
    const role = "admin";
    axiosSecure.patch(`/users/role/${user._id}`, { role }).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${user.name} is an Admin Now!!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleMakeInstructor = (user) => {
    const role = "instructor";
    axiosSecure.patch(`/users/role/${user._id}`, { role }).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${user.name} is an instructor Now!!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);

  console.log(users);

  return (
    <div className="w-full card">
      <HeaderTitle title="Manage Users"></HeaderTitle>
      <div className="overflow-x-auto card-body rounded-xl bg-slate-300">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-base">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((user, index) => (
              <tr key={user._id} className="text-base">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user.role == "instructor"}
                    className="btn btn-ghost bg-deepred  text-white"
                  >
                    instructor
                  </button>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user.role == "admin"}
                    className="btn btn-ghost bg-deepred ml-2  text-white"
                  >
                    admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPosts={users.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default ManageUsers;
