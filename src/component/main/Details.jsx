import React from "react";
import { Link } from "react-router";

const Details = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <div>
          <div className="card bg-base-300 w-96 h-180 mb-6 shadow-sm">
            <figure>
              <img className="w-60 h-90" src={data.image} alt="Shoes" />
            </figure>
            <div className="card-body ">
              <div className="flex justify-between">
                <h2 className="card-title font-bold border-b-2">
                  {data.plantName}
                </h2>
                <div className="badge badge-secondary">{data.category}</div>
              </div>
              <p className="text-left text-gray-500 text-lg font-semibold">
                {data.description}
              </p>
              <div className="">
                {/* <div className="badge badge-outline"></div> */}
                <div className="text-left font-semibold">
                  Available stock :{data.availableStock}
                </div>
              </div>
              <div>
                <h1 className="text-left font-semibold text-lg text-green-800">
                  {data.careLevel} to care.
                </h1>
                <div className="flex font-semibold text-lg justify-between text-left  mt-3 items-center">
                  <p className="font-bold  p-1 pl-2 rounded-lg bg-orange-500 mr-6">
                    Price : <span className="font-bold ">{data.price} $</span>
                  </p>
                  <p>Rating : {data.rating}</p>
                </div>
              </div>
              <Link to={`/single/${data.plantId}`}>
                <button className="btn mt-3 bg-emerald-700 text-white w-full">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="text-left">
          {" "} 
          <h1 className=""></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1>{data.providerName}</h1>
          <h1></h1>
        </div> */}
      </div>
    </div>
  );
};

export default Details;
