import ContactModal from "@/components/modal/ContactModal";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container-body bg-[#F1EEE9] flex items-baseline pt-24 md:pt-36 relative">
      <div className="absolute inset-0 container-body pt-6 md:pt-12">
        <h2 className="text-2xl md:text-7xl font-graphik max-w-fit leading-8 md:leading-snug">
          Verified. Easy. Financed.
        </h2>
        <h2 className="text-2xl md:text-7xl font-graphik max-w-fit leading-8 md:leading-snug font-bold">
          Auction Properties
        </h2>
        <h2 className="text-2xl md:text-7xl font-graphik max-w-fit leading-8 md:leading-snug">
          You Can Trust
        </h2>
        {/* <button className="text-xs md:text-base font-medium rounded px-2 py-1 md:px-4 md:py-3 text-white bg-primary-main mt-2 md:mt-6">
          Get a Call Back
        </button> */}
          <ContactModal />
      </div>
      <Image src="/img/house-2.webp" height={400} width={620} alt="house 2" className="w-36 md:w-[620px]" />
      <Image src="/img/house-1.webp" height={620} width={620} alt="house 1" className="w-48 md:w-[620px]" />
    </div>
  );
};

export default Hero;
