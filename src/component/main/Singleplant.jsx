import React from "react";
import { Link, NavLink } from "react-router";

const Singleplant = ({ plant }) => {
  console.log(plant);
  return (
    <div className="">
      <div className=" grid grid-cols-10   bg-base-300   mb-6 shadow-sm">
        <div className="col-span-4">
          <img className="lg:w-250  " src={plant.image} alt="Shoes" />
        </div>
        <div className="col-span-6">
          <div className="card-body ">
            <div className="flex justify-between">
              <h2 className="card-title font-bold border-b-2">
                {plant.plantName}
              </h2>
              <div className="badge badge-secondary">{plant.category}</div>
            </div>
            <p className="text-left text-gray-500 text-lg font-semibold">
              {plant.description}
            </p>
            <div className="">
              {/* <div className="badge badge-outline"></div> */}
              <div className="text-left font-semibold">
                Available stock :{plant.availableStock}
              </div>
            </div>
            <div>
              <h1 className="text-left font-semibold text-lg text-green-800">
                {plant.careLevel} to care.
              </h1>
              <div className="flex font-semibold text-lg justify-between text-left  mt-3 items-center">
                <p className="font-bold  p-1 pl-2 rounded-lg  bg-orange-500 mr-6">
                  Price : <span className="font-bold ">{plant.price} $</span>
                </p>
                <p>Rating : {plant.rating}</p>
              </div>
              <div>
                <p className="text-lg text-justify font font-semibold mt-4">
                  <span className="text-blue-600 underline">description:</span>{" "}
                  {plant.paragraph}
                </p>
                <button></button>
                <NavLink className="btn text-left " to="/">
                  go to back page
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleplant;
