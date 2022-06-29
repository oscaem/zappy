import React, { useContext } from "react";

import map from "./../../images/countries.png"

const Coverage = () => {

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 bg-body">
        <div className="mb-20">
            <div className="flex flex-col md:p-12 py-12 px-4">
                <h3 className="text-zap-black text-3xl text-center my-2 text-gradient">
                Supported Countries
                </h3>
                <p className="text-center my-2 text-gray-500 font-light px-10 md:px-50 lg:px-60 xl:px-96">
                We aggregate multiple local methods of payment to offer the best price, UX, and broadest coverage, not just cards. <a href="https://www.youtube.com/watch?v=4FFPcbcirMA&ab_channel=BozzyOfficial" className="font-bold text-[#F3B755]">See Full List.</a>
                </p>
                <div>
                <img src={map} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Coverage;
