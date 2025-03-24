"use client";
import React, { useState } from "react";
import PricingCard from "./PricingComp/PaymentCard";

// First, create the stockOptions data
const stockOptionsData = {
  basic: {
    monthly: {
      price: "6,000 + GST",
      planData: [
        { text: "1 STRATEGY" },
        { text: "NO OF Accounts 2" },
        { text: "3 STOCKS" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month " },
      ],
    },
    quarterly: {
      price: "15,000 + GST",
      planData: [
        { text: "1 STRATEGY" },
        { text: "NO OF Accounts 4" },
        { text: "3 STOCKS" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month " },
      ],
    },
    halfYearly: {
      price: "25,000 + GST",
      planData: [
        { text: "1 STRATEGY" },
        { text: "NO OF Accounts 5" },
        { text: "3 STOCKS" },
        { text: "MULTIPLE Categories" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month " },
      ],
    },
  },
  premium: {
    monthly: {
      price: "10,000 + GST",
      planData: [
        { text: "2 STRATEGIES" },
        { text: "NO OF Accounts 4" },
        { text: "10 STOCKS" },
        { text: "PREMIUM INDICATORS" },
        { text: "FULLY AUTOMATIC" },
        { text: "24/7 SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month " },
      ],
    },
    quarterly: {
      price: "25,000 + GST",
      planData: [
        { text: "2 STRATEGIES" },
        { text: "NO OF Accounts 6" },
        { text: "10 STOCKS" },
        { text: "PREMIUM INDICATORS" },
        { text: "FULLY AUTOMATIC" },
        { text: "24/7 SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month " },
      ],
    },
    halfYearly: {
      price: "45,000 + GST",
      planData: [
        { text: "2 STRATEGIES" },
        { text: "NO OF Accounts 8" },
        { text: "10 STOCKS" },
        { text: "PREMIUM INDICATORS" },
        { text: "MULTIPLE Categories" },
        { text: "FULLY AUTOMATIC" },
        { text: "24/7 PRIORITY SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month " },
      ],
    }
  }
};

const paymentData = {
  basic: {
    monthly: {
      price: "6,000 + GST",
      planData: [
        { text: "2 STRATEGIES" },
        { text: "NO OF Accounts 2" },
        { text: "LIMITED SIGNALS" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month" },
      ],
    },
    quarterly: { price: "15,000 + GST", planData: null },
    halfYearly: { price: "25,000 + GST", planData: null },
  },
  premium: {
    monthly: {
      price: "15,000 + GST",
      planData: [
        { text: "5 STRATEGIES" },
        { text: "NO OF Accounts 4" },
        { text: "3-10 SIGNALS PER DAY" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month" },
      ],
    },
    quarterly: { price: "44,000 + GST", planData: null },
    halfYearly: { price: "77,000 + GST", planData: null },
  },
  hni: {
    monthly: {
      price: "30,000 + GST",
      planData: [
        { text: "7-8 STRATEGIES" },
        { text: "NO OF Accounts 5" },
        { text: "4-10 SIGNALS PER DAY" },
        { text: "MULTIPLE Categories" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month" },
      ],
    },
    quarterly: { price: "70,000 + GST", planData: null },
    halfYearly: { price: "100,000 + GST", planData: null },
  },
  stockOptions: stockOptionsData,
  equityFuture: {
    monthly: {
      price: "6,000 + GST",
      planData: [
        { text: "2 STRATEGIES" },
        { text: "NO OF Accounts 2" },
        { text: "LIMITED SIGNALS" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month " },
      ],
    },
    quarterly: {
      price: "15,000 + GST",
      planData: [
        { text: "5 STRATEGIES" },
        { text: "NO OF Accounts 4" },
        { text: "3-10 SIGNALS PER DAY" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month " },
      ],
    },
    halfYearly: {
      price: "25,000 + GST",
      planData: [
        { text: "7-8 STRATEGIES" },
        { text: "NO OF Accounts 5" },
        { text: "4-10 SIGNALS PER DAY" },
        { text: "MULTIPLE Categories" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
        // { text: "1000 Rs.Maintenance Charges For Every Month " },
      ],
    }
  },
  futurePlatform: {
    monthly: {
      price: "10,000 + GST",
      planData: [
        { text: "2 STRATEGIES" },
        { text: "NO OF Accounts 2" },
        { text: "LIMITED SIGNALS" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
      ],
    },
    quarterly: {
      price: "25,000 + GST",
      planData: [
        { text: "5 STRATEGIES" },
        { text: "NO OF Accounts 4" },
        { text: "3-10 SIGNALS PER DAY" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
      ],
    },
    halfYearly: {
      price: "45,000 + GST",
      planData: [
        { text: "7-8 STRATEGIES" },
        { text: "NO OF Accounts 5" },
        { text: "4-10 SIGNALS PER DAY" },
        { text: "MULTIPLE Categories" },
        { text: "FULLY AUTOMATIC" },
        { text: "CALL AND TEXT SUPPORT" },
      ],
    }
  },
  indexOptionPremium: {
    monthly: {
      price: "11,000 + GST",
      planData: [
        { text: "2 STRATEGIES" },
        { text: "NO OF Accounts 4" },
        { text: "NIFTY OPTIONS" },
        { text: "BANKNIFTY OPTIONS" },
        { text: "FINNIFTY OPTIONS" },
        { text: "PREMIUM INDICATORS" },
        { text: "FULLY AUTOMATIC" },
        { text: "24/7 PRIORITY SUPPORT" },
      ],
    },
    quarterly: {
      price: "30,000 + GST",
      planData: [
        { text: "2 STRATEGIES" },
        { text: "NO OF Accounts 6" },
        { text: "NIFTY OPTIONS" },
        { text: "BANKNIFTY OPTIONS" },
        { text: "FINNIFTY OPTIONS" },
        { text: "PREMIUM INDICATORS" },
        { text: "FULLY AUTOMATIC" },
        { text: "24/7 PRIORITY SUPPORT" },
      ],
    },
    halfYearly: {
      price: "50,000 + GST",
      planData: [
        { text: "2 STRATEGIES" },
        { text: "NO OF Accounts 8" },
        { text: "NIFTY OPTIONS" },
        { text: "BANKNIFTY OPTIONS" },
        { text: "FINNIFTY OPTIONS" },
        { text: "PREMIUM INDICATORS" },
        { text: "MULTIPLE Categories" },
        { text: "FULLY AUTOMATIC" },
        { text: "24/7 PRIORITY SUPPORT" },
      ],
    }
  }
};

paymentData.basic.quarterly.planData = paymentData.basic.monthly.planData;
paymentData.basic.halfYearly.planData = paymentData.basic.monthly.planData;
paymentData.premium.quarterly.planData = paymentData.premium.monthly.planData;
paymentData.premium.halfYearly.planData = paymentData.premium.monthly.planData;
paymentData.hni.quarterly.planData = paymentData.hni.monthly.planData;
paymentData.hni.halfYearly.planData = paymentData.hni.monthly.planData;

const PricingSectionComp = () => {
  const [selectPricing, setSelectPricing] = useState("basic");
  const [stockOptionType, setStockOptionType] = useState("basic");

  return (
    <>
      <div className="pt-[30px] pb-[30px] px-4">
        <div className="mx-auto xl:w-[90%] md:w-[95%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
            <button
              className={`py-3 px-4 rounded-lg transition-all ${
                selectPricing === "basic" 
                  ? "bg-red-500 text-white shadow-lg scale-105" 
                  : "bg-gray-100 text-black hover:bg-gray-200"
              } font-bold text-sm sm:text-base`}
              onClick={() => setSelectPricing("basic")}
            >
              BASIC PLATFORM
            </button>
            <button
              className={`py-3 px-4 rounded-lg transition-all ${
                selectPricing === "premium"
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              } font-bold text-sm sm:text-base`}
              onClick={() => setSelectPricing("premium")}
            >
              PREMIUM PLATFORM
            </button>
            <button
              className={`py-3 px-4 rounded-lg transition-all ${
                selectPricing === "hni"
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              } font-bold text-sm sm:text-base`}
              onClick={() => setSelectPricing("hni")}
            >
              HNI PLATFORM
            </button>
            <button
              className={`py-3 px-4 rounded-lg transition-all relative ${
                selectPricing === "stockOptions"
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              } font-bold text-sm sm:text-base`}
              onClick={() => setSelectPricing("stockOptions")}
            >
              STOCK OPTIONS
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button
              className={`py-3 px-4 rounded-lg transition-all ${
                selectPricing === "equityFuture"
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              } font-bold text-sm sm:text-base`}
              onClick={() => setSelectPricing("equityFuture")}
            >
              EQUITY PLATFORM
            </button>
            <button
              className={`py-3 px-4 rounded-lg transition-all ${
                selectPricing === "futurePlatform"
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              } font-bold text-sm sm:text-base`}
              onClick={() => setSelectPricing("futurePlatform")}
            >
              FUTURE PLATFORM
            </button>
            <button
              className={`py-3 px-4 rounded-lg transition-all relative ${
                selectPricing === "indexOptionPremium"
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              } font-bold text-sm sm:text-base`}
              onClick={() => setSelectPricing("indexOptionPremium")}
            >
              INDEX OPTION PREMIUM
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</span>
            </button>
          </div>
        </div>

        {selectPricing === "stockOptions" && (
          <div className="flex justify-center space-x-8 mt-6">
            <button
              className={`px-6 py-2 rounded-lg ${
                stockOptionType === "basic"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setStockOptionType("basic")}
            >
              Basic
            </button>
            <button
              className={`px-6 py-2 rounded-lg ${
                stockOptionType === "premium"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setStockOptionType("premium")}
            >
              Premium
            </button>
          </div>
        )}

        <h2 className="text-4xl text-black py-8 text-center font-semibold">
          Choose a Plan That <span className="text-red-500">Works for You</span>
        </h2>

        <div className="w-full space-y-4 md:space-y-0 card-container md:w-[80%] mx-auto h-auto mb-10 flex justify-evenly flex-row items-center flex-wrap">
          {selectPricing === "stockOptions" ? (
            <>
              <PricingCard
                type={"Monthly Software fees"}
                price={paymentData.stockOptions[stockOptionType].monthly.price}
                key={1}
                index={1}
                bulletPoints={paymentData.stockOptions[stockOptionType].monthly.planData}
              />
              <PricingCard
                type={"Quarterly Software fees"}
                price={paymentData.stockOptions[stockOptionType].quarterly.price}
                key={2}
                index={2}
                bulletPoints={paymentData.stockOptions[stockOptionType].quarterly.planData}
              />
              <PricingCard
                type={"Half Yearly Software fees"}
                price={paymentData.stockOptions[stockOptionType].halfYearly.price}
                key={3}
                index={3}
                bulletPoints={paymentData.stockOptions[stockOptionType].halfYearly.planData}
              />
            </>
          ) : (
            <>
              <PricingCard
                type={"Monthly Software fees"}
                price={paymentData[selectPricing].monthly.price}
                key={1}
                index={1}
                bulletPoints={paymentData[selectPricing].monthly.planData}
              />
              <PricingCard
                type={"Quarterly Software fees"}
                price={paymentData[selectPricing].quarterly.price}
                key={2}
                index={2}
                bulletPoints={paymentData[selectPricing].quarterly.planData}
              />
              <PricingCard
                type={"Half Yearly Software fees"}
                price={paymentData[selectPricing].halfYearly.price}
                key={3}
                index={3}
                bulletPoints={paymentData[selectPricing].halfYearly.planData}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PricingSectionComp;
