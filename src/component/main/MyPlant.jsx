import React, { Suspense, use } from "react";
import AllPlantShow from "./AllPlantShow";

const handleplant = fetch("/myplant.json").then((res) => res.json());
const MyPlant = () => {
  const usedata = use(handleplant);
  console.log(usedata);
  return (
    <div className="grid grid-cols-4">
      {usedata.map((data) => (
        <Suspense fallback={<p>loading</p>}>
          <AllPlantShow data={data} key={data.id}></AllPlantShow>
        </Suspense>
      ))}
    </div>
  );
};

export default MyPlant;
