import React from "react";
import { BsShieldFillCheck, BsCash, BsPersonBadge } from "react-icons/bs";

// Right Service Cards Declaration
const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start yellow-bg-gradient p-5 m-2 cursor-pointer hover:shadow-lg bg-[#f1ebeb] hover:bg-[#f6eeee]">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-zap-black text-lg font-bold">{title}</h3>
      <p className="mt-1 text-[#777D88] text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

// Left Service Disclaimer
const Service = () => (
  <div className="p-10 flex w-full justify-center items-center bg-body">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Smarter Remittance
          <br />
          with Zappy.
        </h1>
        <p className="text-left my-2 text-gray-500 font-light text-base pb-10 md:pb-0 md:pr-10">
          Leveraging the power of Blockchain and Zero-Knowledge Rollups to revolutionise International Remittance without On/Off Ramps.
          <br />
          <a className="text-[#F3B755] text-xs font-bold" href="https://www.youtube.com/watch?v=4FFPcbcirMA&ab_channel=BozzyOfficial">Learn more about how we scale remittance with zkRollups.</a>
        </p>
      </div>

      {/* Right Service Cards */}
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-gradient-to-r from-zap-black to-gray-600"
          title="Smart Identity Verification"
          icon={<BsPersonBadge fontSize={21} className="text-white" />}
          subtitle="No Account required. Send with Quick-KYC. Transactions are processed under a zero-knowledge protocol."
        />
        <ServiceCard
          color="bg-gradient-to-r from-zap-black to-gray-600"
          title="Trustless"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Crosschain transactions are served without a middleman. Send money without interference of foreign institutions."
        />
        <ServiceCard
          color="bg-gradient-to-r from-zap-black to-gray-600"
          title="Save time and money"
          icon={<BsCash fontSize={21} className="text-white" />}
          subtitle="Transaction fees are calculated on a flat rate of 1$ for any volume. Transactions take 95% less time than traditional remittance."
        />
      </div>
    </div>
  </div>
);

export default Service;
