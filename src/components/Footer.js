function Footer() {
  return (
    <footer className="bg-[#181123] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* ... existing footer content ... */}

        <div className="lg:flex lg:justify-between  lg:px-[14vh] lg:items-start lg:space-x-4">
          {/* ... keep all existing content ... */}
        </div>

        {/* Add TradingView credit line here */}
        <div className="pt-4 flex justify-center text-[#566a8d] pb-2 font-extralight lg:text-[12px] text-[1.5vh]">
          Charts are powered by{" "}
          <a 
            href="https://www.tradingview.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00c2e0] hover:text-[#f4511d] transition-colors duration-300"
          >
            TradingView
          </a>
        </div>

        <div className="pt-2 flex justify-center text-gray-400 pb-4 font-extralight hover:underline lg:text-[12px] text-[1.5vh]">
          Brain Auto Tech &#169;2024. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer; 