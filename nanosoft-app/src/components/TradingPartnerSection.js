"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function TradingPartnerSection({ setLoading, indexLoad }) {
  const tradingPartnerRef = useRef();

  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          toggleActions: "restart pause restart pause",
          trigger: ".trading-partner-section",
        },
      });

      t1.from(".trading-partner-content", {
        y: 100,
        opacity: 0,
        duration: 1,
      }).to(".trading-partner-content", {
        y: 0,
        opacity: 1,
        duration: 1,
      });

      if (typeof setLoading === "function") {
        setLoading((prevLoad) => {
          const newLoading = [...prevLoad];
          newLoading[indexLoad] = true;
          return newLoading;
        });
      }
    },
    { scope: tradingPartnerRef }
  );

  return (
    <section 
      ref={tradingPartnerRef}
      className="trading-partner-section py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trading Partner</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto trading-partner-content">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-48">
                <img 
                  src="/tradingview-logo.png" 
                  alt="TradingView Logo"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <p className="text-gray-600 text-lg mb-6">
              Fine Tech Software has partnered with TradingView for its charting solution. A social trading platform offering an exceptional charting experience by which users can conveniently track the prices of different instruments like dow futures and eur usd.
            </p>

            <a 
              href="https://www.tradingview.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TradingPartnerSection; 