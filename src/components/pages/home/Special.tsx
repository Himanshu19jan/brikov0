import Image from "next/image";
import React from "react";

const spzOpt = [
  { img: "/img/auction.webp", val: "Auction to Registry" },
  { img: "/img/personalise.webp", val: "Personalised Approach" },
  { img: "/img/finance.webp", val: "Financing Options" },
  { img: "/img/market.webp", val: "Market Beating Rates" },
];

const Special = () => {
  return (
    <div className="container-body bg-[#F1EEE9] py-8 md:py-24">
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4 md:gap-8">
        <h5 className="text-3xl md:text-5xl font-graphik font-semibold leading-tight md:w-[36%]">
          Count on Briko to find the best deals in the auction space
        </h5>
        <p className="text-base md:text-lg font-graphik md:w-[42%]">
          We are{" "}
          <span className="font-semibold">
            redefining how distressed assets are transacted with a human touch
            and the power of technology
          </span>
          , eliminating the trust deficit and bringing the most hassle-free way
          to buy an auction deal.
        </p>
      </div>
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-8 mt-8 md:mt-16">
        {spzOpt.map((item, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-center justify-center rounded p-6 shadow  w-32 md:w-64 aspect-square text-center"
          >
            <Image src={item.img} alt={item.val} height={100} width={100} />
            <h6 className="font-light font-graphik text-sm md:text-2xl mt-4 w-3/4 leading-7">
              {item.val}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Special;
