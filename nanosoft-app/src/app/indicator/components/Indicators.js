import React from "react";
import { Poppins } from "next/font/google";
import BlobComp3 from "./Blobcomp3";
const poppinsFont = Poppins({ subsets: ["latin"], weight: "600" });
const poppinsFont1 = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsFont2 = Poppins({ subsets: ["latin"], weight: "500" });

const Indicators_Data = [
  {
    name: "Price Exhaustion Indicator",
    ImgSrc: "/indicator/trade1.png",
  },
  {
    name: "Smoothed Gaussian Moving Average",
    ImgSrc: "/indicator/trade2.png",
  },
  {
    name: "Kalman-Filtered Stochastic + ROC",
    ImgSrc: "/indicator/trade3.png",
  },
  {
    name: "Fourier-Smoothed Money Flow Index",
    ImgSrc: "/indicator/trade4.png",
  },
  {
    name: "Price Exhaustion Indicator",
    ImgSrc: "/indicator/trade5.png",
  },
  {
    name: "Smoothed Gaussian Moving Average",
    ImgSrc: "/indicator/trade6.png",
  },
];

const Indicators = () => {
  return (
    <div className="px-[15%] py-[50px]">
        <BlobComp3/>
      <div className={poppinsFont1.className}>
        <p className="md:text-6xl text-4xl text-black text-center">
          Our <span className="text-[#00c2e0] ">Indicators!</span>
        </p>
      </div>
      <div className="pt-[50px]">
        <div className="md:flex md:flex-wrap md:justify-center md:gap-4">
          {Indicators_Data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:w-[calc(50%-1rem)] pt-5"
            >
              <p className={poppinsFont.className}><span className="">{item.name}</span></p>
              <img
                src={item.ImgSrc}
                alt={item.name}
                className="mt-2 cursor-pointer hover:scale-105 md:w-[400px] md:h-[250px] w-[400px] h-[200px] mx-auto border-[2px] border-[#00c2e0] text-black   transition-all duration-300 shadow-[0_0_10px_#00c2e0]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Indicators;
