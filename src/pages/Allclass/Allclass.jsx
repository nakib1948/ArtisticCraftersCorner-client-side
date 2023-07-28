import { useQuery } from "@tanstack/react-query";
import HeaderTitle from "../Shared/HeaderTitle/HeaderTitle";
import { useState } from "react";
import Pagination from "../Shared/Pagination/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDollarSign,
    faEnvelope,
    faMapMarkerAlt,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
const Allclass = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["allclasses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/classes");
      return res.json();
    },
  });
  if (isLoading) {
    return (
      <div className="text-center">
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
  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  console.log(data);

  return (
    <div className="pt-28">
      <HeaderTitle title="Our Available Courses"></HeaderTitle>
      <div className="join flex justify-center items-center my-10">
        <input
          className="input input-secondary input-bordered join-item lg:w-96"
          name="search"
          placeholder="Search Courses..."
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
        {currentPosts
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((classes, index) => (
            <div key={index} className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-96 rounded-xl"
                  src={classes.image}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{classes.name}</h2>
                <p className="text-base">by {classes.instructor}</p>
                <p  className="text-md"> <b> {classes.availableSeats}</b> seat left</p>
                <p  className="text-lg font-serif"><FontAwesomeIcon className="mr-1" icon={faDollarSign} />{classes.price} </p>
              
                <div className="card-actions justify-end">
                    {

                    }
                  <button disabled={classes.availableSeats === 0} className="btn w-full font-bold bg-deepred text-white">Enroll</button>
                </div>
              </div>
            </div>
          ))}
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

export default Allclass;
