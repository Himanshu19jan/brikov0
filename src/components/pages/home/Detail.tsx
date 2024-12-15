import React from "react";

const detailVal = [
  { num: "120+", val: "Deals Completed" },
  { num: "3000+", val: "Curated Listings" },
  { num: "8", val: "Cities Covered" },
];

const Detail = () => {
  return (
    <div className="container-body py-4 md:py-14">
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-4">
        {detailVal.map((item, index) => (
          <div
            key={index}
            className="red-grad flex flex-col items-center justify-center rounded-full p-3 md:p-6 shadow-blur aspect-square w-24 md:w-64 text-center"
          >
            <h3 className="font-graphik font-bold text-sm md:text-7xl text-white">{item.num}</h3>
            <h6 className="font-light font-graphik text-white text-xs md:text-2xl leading-5 md:leading-7">
              {item.val}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
