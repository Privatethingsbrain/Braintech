import React from "react";
import Herosection from "./components/Herosection";
import Header1 from "@/components/Header1";
import Footer from "@/components/Footer";
import Economic from "./components/Economic";
import PaymentCard from "./components/PaymentCard";
import Winning from "./components/Winning";
import Lifetime from "./components/Lifetime";
import Script from "next/script";
import Indicators from "./components/Indicators";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";

const page = () => {
  return (
    <div>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Header1 />
      <Herosection />
      <Winning />
      <Economic />
      <PaymentCard />
      <Lifetime />
      <Indicators/>
      <Footer />
    </div>
  );
};

export default page;
