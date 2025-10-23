import React, { use } from "react";
import { NavLink } from "react-router";
import Details from "./Details";

const fetchdata = fetch("/allPlant.json").then((res) => res.json());
const Allplanthome = () => {
  const usedata = use(fetchdata);
  console.log(usedata);
  return (
    <div>
      <div className="grid grid-cols-3 mt-8">
        {usedata.map((data) => (
          <Details data={data} key={data.id}></Details>
        ))}
      </div>
      <h1></h1>
    </div>
  );
};

export default Allplanthome;
