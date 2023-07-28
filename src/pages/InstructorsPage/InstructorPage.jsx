import { useQuery } from "@tanstack/react-query";
import HeaderTitle from "../Shared/HeaderTitle/HeaderTitle";
import { useState } from "react";
import Pagination from "../Shared/Pagination/Pagination";

const InstructorPage = () => {
  const { data } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/instructor");
      return res.json();
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  console.log(data);

  return (
    <div className="pt-28">
      <HeaderTitle title="Our Instructors"></HeaderTitle>
      <div className="join flex justify-center items-center my-10">
        <input
          className="input input-secondary input-bordered join-item lg:w-96"
          name="search"
          placeholder="Search Instructor..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button
          onClick={() => setSearch("")}
          className="btn bg-deepred text-white join-item rounded-r-full"
        >
          Clear
        </button>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10">
          {currentPosts
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((instructor, index) => (
              <div
                key={index}
                className="card card-compact w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    className="h-60 rounded-lg"
                    src={instructor.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{instructor.name}</h2>
                  <p className="text-base font-sans">Email: {instructor.email}</p>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="text-center">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}

      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
};

export default InstructorPage;
