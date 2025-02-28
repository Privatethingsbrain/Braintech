"use client";
import React, { useEffect } from "react";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

function OurValuesSection({ setLoading, indexLoad }) {
  useEffect(() => {
    setLoading((prevLoad) => {
      const newLoading = [...prevLoad];
      newLoading[indexLoad] = true;
      return newLoading;
    });
  }, []);
  
  return (
    <section className="pt-[834px] lg:pt-32">
      <div className="w-full h-auto bg-[url('https://live.21lab.co/nanosoft/wp-content/uploads/2018/09/10.jpg?id=1363')] bg-cover">
        <div className="bg-[#181123]/90 w-full h-full flex flex-col py-24 space-y-3 justify-between items-center">
          {/* Section Title */}
          <div className="text-center mb-12">
            <p className="tracking-widest text-xs text-[#1dc2ef] uppercase">
              Our
            </p>
            <h2 className={`${poppinsFont.className} text-white text-4xl lg:text-5xl font-bold mt-4`}>
              Trading Partner
            </h2>
            <div className="w-20 h-1 bg-[#f4511d] mx-auto mt-4"></div>
          </div>
          
          {/* TradingView Logo */}
          <div className="flex justify-center mb-12 transform hover:scale-105 transition-transform duration-300">
            <div className="w-56 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
              <img 
                src="/image/logo-TV.png"
                alt="TradingView Logo"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Description */}
          <div className="max-w-4xl mx-auto px-4">
            <p className={`${poppinsFont.className} text-[#9b9aad] text-center text-lg lg:text-2xl leading-relaxed`}>
              Brain Auto Tech Pvt Ltd has partnered with <span className="text-[#1dc2ef] font-semibold">TradingView</span> for its charting solution. A social trading platform offering an exceptional charting experience by which users can conveniently track the prices of different instruments like{" "}
              <a 
                href="https://www.tradingview.com/symbols/CBOT_MINI-YM1!/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1dc2ef] hover:text-[#f4511d] transition-colors duration-300"
              >
                dow futures
              </a>
              {" "}and{" "}
              <a 
                href="https://www.tradingview.com/symbols/EURUSD/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1dc2ef] hover:text-[#f4511d] transition-colors duration-300"
              >
                eur usd
              </a>.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 px-4 max-w-6xl mx-auto">
            {[
              {
                title: "Advanced Charts",
                description: "Professional-grade charts with multiple timeframes"
              },
              {
                title: "Real-Time Data",
                description: "Live market data for informed trading decisions"
              },
              {
                title: "Technical Analysis",
                description: "Comprehensive tools for market analysis"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#1dc2ef] transition-colors duration-300">
                <h3 className={`${poppinsFont.className} text-[#1dc2ef] font-semibold text-xl mb-2`}>
                  {feature.title}
                </h3>
                <p className="text-[#9b9aad]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a 
            href="https://www.tradingview.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
              ${poppinsFont.className}
              mt-12 bg-gradient-to-r from-[#f4511d] to-[#ff6b3d] 
              text-white px-10 py-4 rounded-lg font-semibold
              hover:from-[#ff6b3d] hover:to-[#f4511d]
              transform hover:-translate-y-1
              transition-all duration-300 shadow-lg hover:shadow-xl
              flex items-center gap-2
            `}
          >
            Explore TradingView
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurValuesSection;
