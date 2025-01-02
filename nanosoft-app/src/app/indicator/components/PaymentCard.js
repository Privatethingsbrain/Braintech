"use client";
import React from "react";
import { Poppins } from "next/font/google";
import BlobComp1 from "./Blobcomp1";
import BlobComp2 from "./Blobcomp2";

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
const Ticks = [
  {
    point: "Simple and elegent display",
  },
  {
    point: "Swift delivery",
  },
  {
    point: "Free updates",
  },
  {
    point: "Real-time alert",
  },
];
const PaymentCard = () => {
  return (
    <div className="md:px-[15%] px-[5%] pb-[50px]">
        <BlobComp2/>
      <div className="md:flex md:items-start md:justify-center py-7">
        <div className="md:w-[50%]">
          <div>
            <div className={poppinsFont1.className}>
              <p className="text-5xl">
                Choose your <br></br>Plan Today
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className={poppinsFont1.className}>
                <p>
                  All you need is a free TradingView<br></br> account to get
                  started!
                </p>
              </div>
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="47.999 62.5 104 74.999"
                viewBox="47.999 62.5 104 74.999"
                height="150"
                width="150"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="presentation"
                aria-hidden="true"
              >
                <defs>
                  <style>
                    {`
          #comp-li4h3tzl svg [data-color="1"] { fill: #F66600; }
          #comp-li4h3tzl svg [data-color="2"] { fill: #CCCCCC; }
        `}
                  </style>
                </defs>
                <g>
                  <path
                    fill="#E98866"
                    d="M96.43 94.141c0 5.558-10.616 10.064-23.712 10.064s-23.712-4.506-23.712-10.064 10.616-10.064 23.712-10.064S96.43 88.583 96.43 94.141z"
                    data-color="1"
                  ></path>
                  <path
                    fill="#E98866"
                    d="M151.576 72.564c0 5.558-10.616 10.064-23.712 10.064s-23.712-4.506-23.712-10.064S114.768 62.5 127.864 62.5s23.712 4.506 23.712 10.064z"
                    data-color="1"
                  ></path>
                  <path
                    d="M93.711 107.041c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.018 2.018 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M93.711 117.829c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.017 2.017 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M93.711 128.618c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.017 2.017 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.014 2.014 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M103.953 88.306c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.8-.55c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.016 2.016 0 0 0-2.825.405 2.03 2.03 0 0 0 .405 2.833z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M148.857 96.253c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.016 2.016 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M148.857 107.041c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.018 2.018 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M148.857 117.829c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.017 2.017 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.013 2.013 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                  <path
                    d="M148.857 128.618c-4.424 2.983-12.458 4.836-20.964 4.836-8.982 0-17.227-2.004-21.519-5.232a2.017 2.017 0 0 0-2.825.405 2.026 2.026 0 0 0 .404 2.832c5.03 3.782 13.979 6.04 23.94 6.04 9.406 0 18.085-2.066 23.215-5.525a2.025 2.025 0 0 0 .548-2.807 2.014 2.014 0 0 0-2.799-.549z"
                    fill="#0E4828"
                    data-color="2"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:px-[10%] ">
          <div>
            {Ticks.map((eleData, index) => (
              <div
                key={index}
                className="flex md:space-x-2 py-2 items-center  text-[#6a67f9] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p className="text-black text-xl">
                  <span className={poppinsFont2.className}>
                    {eleData.point}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-3xl py-4">
        <span className={poppinsFont.className}>
          GET ALL INDICATORS WITH SILVER AND GOLD SUBSCRIPTIONS
        </span>
      </div>
      <div className="md:flex md:justify-between md:items-start">
        {payment_info.map((eleData, index) => (
          <div
            key={index}
            className=" md:w-[300px] bg-[#b9eef6] h-[420px] border-[2px] border-[#00c2e0] text-black pb-2  rounded-[1.7rem] transition-all duration-300 shadow-[0_0_10px_#00c2e0] mx-4 mt-7"
          >
            <div className="h-[50%] flex flex-col justify-center items-center bg-[#00c2e0] rounded-t-3xl">
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
                className="bg-[#f5511d] py-3 px-5 rounded-3xl text-sm mt-8 text-white hover:bg-[#e04819] focus:ring-2 focus:ring-[#f5511d] focus:outline-none"
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
      <div className="text-center text-lg text-gray-600 py-4">
        <span className={poppinsFont.className}>Cancel anytime.</span>
      </div>
      <div>
        <div className="text-center text-lg text-gray-600 pt-2">
          <span className={poppinsFont2.className}>
            CHECKOUT SECURELY WITH:
          </span>
        </div>
        <div className="flex justify-center items-center mt-[-20px]">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/razorpay-icon.png"
            alt="Razorpay Icon"
            style={{
              width: "100px",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
