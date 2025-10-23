import React from "react";

const AllPlantShow = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.image} alt="" />
      </div>
    </div>
  );
};

export default AllPlantShow;
