import { useState } from "react";
import usePayment from "../../hooks/usePayment";
import Loader from "../Shared/Loader/Loader";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import HeaderTitle from "../Shared/HeaderTitle/HeaderTitle";
import MyEnrolledClassTable from "./MyEnrolledClassTable";

const MyEnrolledCourses = () => {
  const [data, isLoading, error, refetch] = usePayment();
  const [enrolldata, setEnrolleddata] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <HeaderTitle title="My Enrolled Courses"></HeaderTitle>
      <div className="overflow-x-auto w-full mt-10 bg-base-200">
        <table className="table">
          <thead>
            <tr>
              <th className="text-base text-purple ">Image</th>
              <th className="text-base text-purple ">Course Name</th>
              <th className="text-base text-purple ">Instructor</th>
              <th className="text-base text-purple ">Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {data.map((courses) =>
              courses.courseDetails.map((course, index) => (
                <MyEnrolledClassTable
                  course={course}
                  key={index}
                ></MyEnrolledClassTable>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
