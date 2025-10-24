import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../../../Footer";
import { useLoaderData, useParams } from "react-router";
import Singleplant from "./Singleplant";

const PlantDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [plant, setplant] = useState({});
  console.log(data, id, plant);
  useEffect(() => {
    const plantbiboron = data.find((singledata) => singledata.plantId == id);
    setplant(plantbiboron);
  }, [data, id]);

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Singleplant plant={plant}></Singleplant>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PlantDetails;
