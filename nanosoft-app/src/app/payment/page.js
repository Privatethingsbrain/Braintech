import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import React from "react";

const Page = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <section>
        <LoadGoogleAdsIframe />
        <Header1 />
        <div className="pt-[80px] pb-[30px]">
          <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh]">
            Payment
          </h1>
          <div className="md:flex justify-center gap-[5vh] pt-[30px] pb-[30px] px-[5%] xl:px-0">
            <div>
              <div className="shadow-xl w-fit p-[40px] text-[2vh] rounded-xl text-[#6a6a6a] hover:-translate-y-3 transition-transform duration-300 ease-out">
                <div className="flex justify-center pb-[10px] ">
                  <img src="/image/axisbank.png" width={250} className="" />
                </div>
                <p className="p-[12px] font-medium">
                  <span className=" font-bold">Bank Name:-</span> Axis Bank
                </p>
                <p className="p-[12px] font-medium">
                  <span className=" font-bold">Account Name :-</span>{" "}
                  Brainautotech Pvt Ltd
                </p>
                <p className="p-[12px] font-medium">
                  <span className=" font-bold">Account Number :- </span>
                  924020027157296
                </p>
                <p className="p-[12px] font-medium">
                  <span className=" font-bold">IFSC Code :-</span> UTIB0002661
                </p>
              </div>
              <div className="shadow-xl w-full p-[30px] rounded-xl mt-[50px] hover:-translate-y-3 transition-transform duration-300 ease-out">
                <img src="/image/razor-pay.jpeg" />
              </div>
            </div>
            <div className="shadow-2xl p-[20px] w-fit h-fit rounded-2xl mt-[50px] xl:mt-0 hover:-translate-y-3 transition-transform duration-300 ease-out">
              <img src="/image/axisqr.jpeg" width={450} />
            </div>
          </div>
        </div>
        <hr className="pb-[30px]"></hr>
        <Footer />
      </section>
    </>
  );
};

export default Page;
