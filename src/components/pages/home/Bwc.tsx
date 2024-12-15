import React from "react";

const lines = [
  "Legal diligence report by our experts",
  "Market rate evaluation so you get the best deals",
  "Easy financing at the best interest rates",
];

const Bwc = () => {
  return (
    <div className="container-body bg-[#1E1E1E] py-8 md:py-24">
      <div>
        <h2 className="text-4xl md:text-home font-graphik font-bold text-white w-1/2 leading-none">
          <span className="text-primary-main">Buy</span> with confidence.
        </h2>
      </div>
      <div className="flex justify-center md:justify-end mt-4">
        <div className="space-y-4">
          {lines.map((line, index) => (
            <h6
              key={index}
              className="text-xs md:text-lg font-graphik text-white text-center bg-primary-main px-3 py-2 md:px-6 md:py-4 border"
            >
              {line}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bwc;
