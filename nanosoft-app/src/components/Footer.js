"use client";
import React, { useState } from "react";
import PopUp from "./PopUp";
import { AnimatePresence } from "framer-motion";
import popUpsData from "@/data/ItServicesData/ItServicesData";

function Footer() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen !== null && (
          <PopUp {...popUpsData[isOpen]} setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
      <footer className="">
        <div className="lg:flex lg:justify-between lg:px-[14vh] lg:items-start lg:space-x-4">
          {/* First column */}
          <div className="flex justify-center">
            <div className="flex-row">
              <a href="/" className="cursor-pointer outline-none border-none">
                <img src="/braintechlogo.PNG" width={200} />
              </a>
              <p className="pb-[30px] pt-[10px] text-[#566a8d] pl-[12px]">
                Brain Auto Tech is a leading algorithmic <br></br>software
                provider, revolutionizing the future of <br></br>automation with
                cutting-edge solutions.
                <br></br>
                <span className="font-bold cursor-pointer hover:font-black transition-all duration-300 ease-out">
                  CIN NO: U62013MP2024PTC069897
                </span>
                <br></br>
                <span className="font-bold cursor-pointer hover:font-black transition-all duration-300 ease-out">
                  GSTN NO: 23AAMCB3515A1ZB
                </span>
              </p>
              <div className="flex justify-start gap-4 items-start pb-8 pl-[10px]">
                {/* Social media links */}
                <a
                  href="https://www.facebook.com/brainautotechprivatelimited"
                  target="_blank"
                  title="Facebook"
                >
                  <img
                    src="https://img.icons8.com/?size=48&id=118497&format=png"
                    width={36}
                  />
                </a>
                <a
                  href="https://www.instagram.com/brainautotech"
                  target="_blank"
                  title="Instagram"
                >
                  <img
                    src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png"
                    width={35}
                  />
                </a>
                <a
                  href="https://telegram.me/brainautotech"
                  target="_blank"
                  title="Telegram"
                >
                  <img
                    src="https://img.icons8.com/?size=96&id=25n4hOEoY7ss&format=png"
                    width={32}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@BrainAutoTech"
                  target="_blank"
                  title="YouTube"
                >
                  <img
                    src="https://img.icons8.com/?size=96&id=19318&format=png"
                    width={33}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Middle columns */}
          <div className="flex justify-center gap-[4vh]">
            {/* IT Services */}
            <div className="pl-[5px]">
              <ul className="hover:cursor-pointer">
                <li className="font-semibold text-[17px] text-[#00c2e0]">
                  ✧ IT services ✧
                </li>
                <div className="text-[#566a8d] pt-[15px] flex-col font-medium">
                  <a
                    href="/it-services/web-development"
                    className="hover:underline block"
                  >
                    ➠ Web Development
                  </a>
                  <a
                    href="/it-services/mobile-app-development"
                    className="hover:underline block"
                  >
                    ➠ Mobile App development
                  </a>
                  <a
                    href="/it-services/graphic-video-design"
                    className="hover:underline block"
                  >
                    ➠ Graphic & Video Design
                  </a>
                  <a
                    href="/it-services/software-development"
                    className="hover:underline block"
                  >
                    ➠ Software Development
                  </a>
                  <a
                    href="/it-services/game-development"
                    className="hover:underline block"
                  >
                    ➠ Game Development
                  </a>
                  <a
                    href="/it-services/digital-marketing"
                    className="hover:underline block"
                  >
                    ➠ Digital Marketing
                  </a>
                  <li className="hover:underline" onClick={() => setIsOpen(6)}>
                    ➠ Partners
                  </li>
                </div>
              </ul>
            </div>

            {/* Algo Services */}
            <div className="pl-[5px]">
              <ul className="hover:cursor-pointer">
                <li className="font-semibold text-[17px] text-[#00c2e0]">
                  ✧ Algo Services ✧
                </li>
                <div className="text-[#566a8d] pt-[15px] flex-col font-medium">
                  <li className="hover:underline">
                    <a href="/algo-services/api-bridge/">➠ Api Bridge</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/algo-services/algo-trading/">➠ Algo software</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/algo-services/auto-buy-and-sell-signal/">➠ Signals</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/algo-services/strategy-development/">➠ Strategy Development</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex justify-center pt-[25px] lg:pt-0 lg:m-[-12px] lg:px-0 md:px-[30%] sm:px-[20%] px-[10%]">
            <div>
              <div className="font-bold text-[35px] text-[#00c2e0]">
                Contact Info:
              </div>
              <div className="font-semibold pt-[20px] text-[#566a8d]">
                📍 Janjeerbala Sqare, Near Janjeerbala Sqare <br />
                Indore, Madhya Pradesh, 452010
              </div>
              <div className="text-[#566a8d] pt-[20px]">
                📞 Phone:{" "}
                <a className="text-[#0e2b5c]" href="tel:9179042673">
                  +91 9179042673
                </a>{" "}
                <br></br> 📩 Email:{" "}
                <a
                  href="mailto:brainautotech1902@gmail.com"
                  className="text-[#0e2b5c]"
                >
                  brainautotech1902@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TradingView credit line */}
        <div className="pt-4 flex justify-center items-center text-[#566a8d] pb-2 font-light lg:text-[14px] text-[1.7vh] space-x-2">
          <svg 
            viewBox="0 0 24 24" 
            className="w-4 h-4 fill-current"
          >
            <path d="M4.75 19.25h14.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75V20a.75.75 0 0 1 .75-.75Z"/>
            <path d="M5 2.75A2.75 2.75 0 0 0 2.25 5.5v10.5a2.75 2.75 0 0 0 2.75 2.75h14a2.75 2.75 0 0 0 2.75-2.75V5.5A2.75 2.75 0 0 0 19 2.75Zm14 1.5a1.25 1.25 0 0 1 1.25 1.25V16a1.25 1.25 0 0 1-1.25 1.25H5A1.25 1.25 0 0 1 3.75 16V5.5A1.25 1.25 0 0 1 5 4.25Z"/>
          </svg>
          <span>Charts are powered by</span>
          <a 
            href="https://www.tradingview.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00c2e0] hover:text-[#f4511d] transition-all duration-300 font-medium flex items-center group"
          >
            TradingView
            <svg 
              className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-2 flex justify-center text-gray-400 pb-4 font-extralight hover:underline lg:text-[12px] text-[1.5vh]">
          Brain Auto Tech &#169;2024. All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
