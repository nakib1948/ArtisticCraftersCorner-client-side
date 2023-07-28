import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HeaderTitle from "../../Shared/HeaderTitle/HeaderTitle";

const ClassesSection = () => {
  const loaderData = useLoaderData();
  const Popularcls = loaderData.slice(0, 6);

  return (
    <div className="mt-20">
      <HeaderTitle title="Our Popular Classes"></HeaderTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10">
        {Popularcls.map((cls, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={cls.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cls.name}</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary badge-outline badge-lg">
                  enrolled: {cls.enrolled}
                </div>
                <div className="badge badge-secondary badge-outline badge-lg">
                  availableSeats: {cls.availableSeats}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesSection;
