import Header1 from "@/components/Header1";
import React from "react";
import AlgoSection from "./compo/algoSectionComp";
import Footer from "@/components/Footer";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";

const Page = () => {
  return (
    <>
    <LoadGoogleAdsScript />
    <LoadGoogleAdsIframe />
      <Header1 />
      <div className="pt-[80px]">
        <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[4vh] xl:text-[8vh] ">
          Auto Signals
        </h1>
      </div>
      <AlgoSection />
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;
