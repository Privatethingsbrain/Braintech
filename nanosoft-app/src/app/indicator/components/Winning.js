import React from "react";

function Winning() {
  return (
    <div className="my-6">
      <div className="text-center flex flex-col space-y-4">
        <h2 className="text-6xl font-bold text-[#00c2e0]">Our Winning Edge</h2>
        <p className="text-lg px-[20%]">
          Discover ProfitPro, the ultimate online trading service featuring Pace
          Pro, ProfitAlgo and Pro Scalper, the most advanced, cutting-edge
          indicators that unveil precise{" "}
          <span className="text-green-500">BUY</span> and{" "}
          <span className="text-red-500">SELL</span> signals, catapulting your
          trading success!
        </p>
        <div className="flex flex-row justify-center space-x-4 ">
          <div className="w-[500px] flex justify-end">
            <div className="p-2">
              <MobileComp />
            </div>
          </div>
          <div className="py-10 flex flex-col w-[700px] justify-between">
            <RightComp
              title={"Maximize ProfitPro in every asset and timeframe"}
              para={`Conquer the world of cryptocurrency, stocks, and forex in any timeframe on TradingView.`}
            />
            <RightComp
              title={"Explore additional features to elevate your trading"}
              para={`Unlock the power of our volatility bands, support/resistance levels and more!`}
            />
            <RightComp
              title={"Stay one step ahead with real-time alerts"}
              para={`Customize your own alerts and get instant notifications directly to your phone or computer.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RightComp({ title, para }) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-3">
        <div>
          <img
            className="h-7 w-7"
            src="https://img.icons8.com/office/80/checked--v1.png"
            alt="checked--v1"
          />
        </div>
        <h4 className="font-bold text-2xl">{title}</h4>
      </div>
      <div className="">
        <ul className="list-disc text-left pl-24">
          <li>{para}</li>
        </ul>
      </div>
    </div>
  );
}

function MobileComp({ phoneImgSrc = "" }) {
  return (
    <div className="relative w-[225px] h-[425px] mt-10">
      <div className="w-[225px] h-[425px] z-20">
        <div className="absolute w-[225px] h-[425px] z-30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            className="h-full object-cover"
            src="/graphics/phone.avif"
            alt=""
          />
        </div>
        <div className="absolute w-[200px] h-[405px] z-20 -translate-x-1/2 -translate-y-[50%] left-1/2 top-1/2">
          <img
            className=" h-full w-full object-cover rounded-[35px]"
            src="/graphics/ss1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-[225px] h-[425px] absolute  -left-28 -top-8 z-10">
        <div className="absolute w-[225px] h-[425px] z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            className="h-full object-cover"
            src="/graphics/phone.avif"
            alt=""
          />
        </div>
        <div className="absolute w-[200px] h-[405px] -translate-x-1/2 -translate-y-[50%] left-1/2 top-1/2">
          <img
            className=" h-full w-full object-cover rounded-[35px]"
            src="/graphics/ss1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Winning;
