import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import React from "react";
import Wrapper from "./Wrapper";

async function Home({ _, searchParams }) {
  console.log(searchParams);
  const {
    name: yourName,
    email,
    mobile,
    type: strType,
    rzorderid,
    rzpaymentid,
    rzsign,
    note,
  } = await searchParams;
  // console.log(searchParams);
  return (
    <div>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <div className="mt-[120px]"></div>
      <Wrapper
        yourName={yourName}
        email={email}
        mobile={mobile}
        strType={strType}
        rzorderid={rzorderid}
        rzpaymentid={rzpaymentid}
        rzsign={rzsign}
        note={note}
      />
      <Footer />
    </div>
  );
}

export default Home;
