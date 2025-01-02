"use client";
import React from "react";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsFont1 = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsFont2 = Poppins({ subsets: ["latin"], weight: "500" });

const payment_info = [
  {
    plan: "Bronze",
    price: 99,
    time: "Every month",
    features: ["Buy and Sell", "Signal Alert", "Customizable", "24/7 Support"],
  },
  {
    plan: "Premium",
    price: 199,
    time: "Every 6 months",
    features: [
      "Buy and Sell",
      "Signal Alert",
      "Customizable",
      "24/7 Support",
      "Feature 4",
    ],
  },
  {
    plan: "HNI",
    price: 299,
    time: "Every Year",
    features: [
      "Buy and Sell",
      "Signal Alert",
      "Customizable",
      "24/7 Support",
      "Limit Order",
      "ProfitAlgo",
    ],
  },
];
const PaymentCard = () => {
  return (
    <div className="px-[15%] pb-[50px]">
      <div className="text-center text-3xl py-4">
        <span className={poppinsFont.className}>GET ALL INDICATORS WITH SILVER AND GOLD SUBSCRIPTIONS</span>
      </div>
      <div className="md:flex md:justify-between md:items-start">
        {payment_info.map((eleData, index) => (
          <div
            key={index}
            className=" md:w-[300px] bg-[#b9eef6] h-[420px] border-[2px] border-[#00c2e0] text-black py-2  rounded-3xl transition-all duration-300 shadow-[0_0_10px_#00c2e0] mx-4 mt-4"
          >
            <div className="h-[50%] flex flex-col justify-center items-center">
              <p className="text-2xl font-semibold">
                <span className={poppinsFont2.className}>{eleData.plan}</span>
              </p>
              <p className="text-3xl font-semibold mt-3">
                <span className={poppinsFont1.className}>${eleData.price}</span>
              </p>
              <p className="text-xs">
                <span className={poppinsFont.className}>{eleData.time}</span>
              </p>
              <button
                className="bg-[#f5511d] py-2 px-4 rounded-3xl text-sm mt-8 text-white hover:bg-[#e04819] focus:ring-2 focus:ring-[#f5511d] focus:outline-none"
                onClick={() => {
                  console.log(`${eleData.price}`);
                }}
              >
                <span className={poppinsFont2.className}>Purchase</span>
              </button>
            </div>

            <hr className="border-t-2 border-[#00c2e0] transition-all duration-300 shadow-[0_0_10px_#00c2e0]"></hr>
            <div className={poppinsFont2.className}>
              <ul className="mt-4 flex items-start flex-col gap-2 text-start justify-center px-[25%]">
                {eleData.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-[#566a8d] flex items-center justify-between mt-[2px] gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-green-400  flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="leading-none">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentCard;
