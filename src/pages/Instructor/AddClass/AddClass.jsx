import { useContext } from "react";
import HeaderTitle from "../../Shared/HeaderTitle/HeaderTitle";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgURL = imgResponse.data.display_url;
        const { name, email, price, availableSeats, instructor } = data;
        const newData = {
          name,
          image: imgURL,
          instructorEmail: email,
          price: parseFloat(price),
          availableSeats: parseFloat(availableSeats),
          instructor,
          enrolled: 0,
          status: "pending",
          feedback: "",
        };
        axiosSecure.post("/classes", newData).then((data) => {
          if (data.data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title:
                "Course submitted successfully!!wait for approval or feedback",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
          }
        });
      });
  };
  return (
    <div className="w-full ml-3 card">
      <Helmet>
        <title>ArtisticCraftersCorner | Instructordashboard</title>
      </Helmet>
      <HeaderTitle title="Add a Class"></HeaderTitle>
      <div className="card-body bg-slate-300 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-deepred  text-lg">
                  Class Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Class Name...."
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-secondary input-bordered w-full"
                />
              </label>
              {errors.name?.type === "required" && (
                <small className="text-red-500" role="alert">
                  {" "}
                  name is required
                </small>
              )}
            </div>
            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-deepred  text-lg">
                  Upload image
                </span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered w-full max-w-xs"
                />{" "}
              </label>
              {errors.image?.type === "required" && (
                <small className="text-red-500" role="alert">
                  {" "}
                  image is required
                </small>
              )}
            </div>
          </div>

          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text text-deepred  text-lg">
                  Instructor Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Instructor name..."
                  value={user?.displayName}
                  {...register("instructor", { required: true })}
                  className="input input-secondary input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-deepred  text-lg">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  placeholder="Instructor email"
                  value={user?.email}
                  {...register("email", { required: true })}
                  className="input input-secondary input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex my-5 lg:flex">
            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-deepred  text-lg">
                  Available seats
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  min="1"
                  name="availableSeats"
                  {...register("availableSeats", { required: true })}
                  placeholder="seats..."
                  className="input input-secondary input-bordered w-full"
                />
              </label>
              {errors.availableSeats?.type === "required" && (
                <small className="text-red-500" role="alert">
                  {" "}
                  availableSeats is required
                </small>
              )}
            </div>

            <div className="form-control md:w-1/2 lg:ml-4 md:ml-4">
              <label className="label">
                <span className="label-text text-deepred  text-lg">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  min="1"
                  {...register("price", { required: true })}
                  placeholder="price..."
                  className="input input-secondary input-bordered w-full"
                />
              </label>
              {errors.price?.type === "required" && (
                <small className="text-red-500" role="alert">
                  {" "}
                  price is required
                </small>
              )}
            </div>
          </div>

          <input
            type="submit"
            value="Submit Class"
            className="btn btn-block bg-deepred  text-white font-semibold  mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
