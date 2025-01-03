"use client";
import React, { useRef } from "react";
import html2canvas from "html2canvas";

function Wrapper({
  yourName,
  email,
  mobile,
  strType,
  note,
  rzorderid,
  rzpaymentid,
  rzsign,
}) {
  const mainRef = useRef();
  const downloadRef = useRef();
  function downloadPageHandle() {
    if (mainRef.current && downloadRef.current) {
      html2canvas(mainRef.current).then((canvas) => {
        const dataString = canvas.toDataURL();
        // console.log(dataString);
        downloadRef.current.href = dataString;
        downloadRef.current.click();
      });
    }
  }
  return (
    <div ref={mainRef} className="pb-[30px]">
      <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[4vh] xl:text-[8vh]">
        Payment Successful
      </h1>
      <div className="flex flex-col items-center px-2 lg:px-20">
        <div className="text-center  text-black text-[3vh] pt-[10px] leading-loose font-medium">
          Thank You for purchasing, click on{" "}
          <span
            onClick={downloadPageHandle}
            className="text-red-400 cursor-pointer"
          >
            download page
          </span>{" "}
          or take a{" "}
          <span
            onClick={() => window.print()}
            className="text-red-400 cursor-pointer"
          >
            print of this page
          </span>{" "}
          for future reference. We will get back to you shortly
        </div>
        <div
          className="cursor-pointer bg-orange-400 p-5 my-7 inline-block rounded-xl"
          onClick={downloadPageHandle}
        >
          Download Page
        </div>
        <a className="hidden" ref={downloadRef} download={"payment.png"}>
          Hidden
        </a>
        <div className="">
          <div className="w-full mx-auto p-8 bg-slate-50 rounded-lg relative border-[12px] border-white shadow-2xl ">
            <h2 className="text-2xl text-center font-bold mb-7 text-[#1f3a68]">
              Your Order Details
            </h2>
            <form className="">
              <div className="flex flex-row flex-wrap gap-x-4">
                <LabelComp label="Name" value={yourName} />
                <LabelComp label="Email" value={email} />
                <LabelComp label="Mobile" value={mobile} />
                <LabelComp label="Strategy Type" value={strType} />
                <LabelComp label="Status" value="paid" />
                <LabelComp label="Razorpay Order Id" value={rzorderid} />
                <LabelComp label="Razorpay Payment Id" value={rzpaymentid} />
                <LabelComp label="Razorpay Signature" value={rzsign} />
                <LabelComp label="Note (Optional)" value={note} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelComp({ label, value }) {
  return (
    <div className="mb-4 lg:min-w-64">
      <label className="block text-sm font-semibold mb-2 text-[#1f3a68]">
        {label}
      </label>
      <div className="w-full px-3 py-3 border rounded-lg bg-slate-100 text-sm">
        {value}
      </div>
    </div>
  );
}

export default Wrapper;
