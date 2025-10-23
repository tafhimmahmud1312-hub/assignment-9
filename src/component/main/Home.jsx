import React, { Suspense } from "react";

import Allplanthome from "./allplanthome";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
      <div>
        <Marquee className="text-5xl font-bold mt-5 bg-gradient-to-r from  bg-green-800  to-blue-300 p-3">
          <p>Wellcome to plant World</p>
        </Marquee>
        <div>
          <Suspense fallback={<p>loading...........</p>}>
            <Allplanthome></Allplanthome>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
