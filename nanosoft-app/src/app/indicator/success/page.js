import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import React from "react";
import Wrapper from "./Wrapper";

async function Home({ _, searchParams }) {
  console.log(searchParams);
  const { name: yourName } = await searchParams;
console.log(yourName)
  return (
    <div>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <div className="mt-[120px]"></div>
      <Wrapper yourName={yourName} />
      <Footer />
    </div>
  );
}

export default Home;
