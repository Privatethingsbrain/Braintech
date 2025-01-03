import React from "react";

function Lifetime() {
  return (
    <div className="w-full pt-6 pb-[50px]">
      <div className="w-full flex-row flex justify-center space-x-7">
        <div className="flex flex-col items-start">
          <h2 className="font-bold text-5xl text-[#00c2e0]">LIFETIME ACCESS</h2>
          <div className="flex flex-row items-center relative py-10 pl-6">
            <ul className="list-disc text-xl space-y-4">
              <li>All premium features</li>
              <li>Lifetime updates</li>
              <li>Priority customer support</li>
              <li>Unlimited use</li>
              <li>Pro Scalper</li>
              <li>ProfitAlgo</li>
              <li>Pace Pro</li>
            </ul>
            <div className="h-80 w-80 absolute -z-50">
              <img
                alt=""
                src="/graphics/grow.avif"
                className="-rotate-[28deg] object-contain h-full w-full absolute -translate-x-1/2 -translate-y-1/2 left-3/4 top-[55%] pointer-events-none"
              />
            </div>
          </div>
        </div>
        <div className="w-96 flex flex-col rounded-2xl overflow-hidden border-[#00c2e0] shadow-[0_0_10px_#00c2e0] bg-[#b9eef6] border-[2px]">
          <div className="w-full h-48 rounded-lg overflow-hidden border-[#00c2e0] border-b-[2px]">
            <img
              alt=""
              className="h-full w-full object-cover"
              src="/graphics/stock.avif"
            />
          </div>
          <div className="py-7 flex flex-col items-center">
            <h4>LIFETIME ACCESS</h4>
            <p>$ 499</p>
            <p>One-time payment!</p>
            <div className="w-full bg-slate-50 rounded-lg">Purchase Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lifetime;
