import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container-body py-4 md:py-14">
      <h2 className="text-xl md:text-7xl font-graphik">
      We founded {" "}
      <span className="bg-[#face69]">BRIKO with a clear mission:</span>
      {" "}to make buying real estate through bank auctions{" "}<span className="bg-[#face69]"> easy, secure, and trustworthy.</span> As investors ourselves, we saw firsthand the challenges buyers face—hidden fees, complex processes, and a lack of transparency. That’s why we created a platform designed to eliminate these barriers. With BRIKO, you gain direct access to {" "} 
      <span className="text-white bg-black">discounted properties, fully verified deals, and straightforward financing</span>{" "} options—all in one place. Our goal is to empower you to navigate your real estate journey with{" "} 
      <span className="bg-[#face69]">confidence, clarity, and control.</span>
      </h2>
      {/* <h2 className="text-2xl md:text-7xl font-graphik">
        We are a team of passionate industry experts who are redefining how{" "}
        <span className="text-white bg-black">
          distressed assets are transacted with a human touch and the power of
          technology
        </span>
        , we are <span className="bg-[#face69]">eliminating</span> the{" "}
        <span className="bg-[#face69]">trust deficit</span> and{" "}
        <span className="bg-[#face69]">process friction</span>
        that has traditionally plagued this market.
      </h2> */}
      <div className="border-8 border-[#E75250] p-8 pb-16 mt-8 grid-img grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 pt-12 flex justify-center items-center flex-col">
          <Image
            src="/img/geet.webp"
            alt="geet"
            width={300}
            height={800}
            className="w-80 mb-2"
          />
          <h4 className="uppercase font-graphik text-white font-semibold text-2xl">
            Geet Sethi
          </h4>
          <p className="text-[#FACE69] font-graphik">Goldman sachs | College dunia | BITS</p>
        </div>
        <div className="col-span-1 flex justify-center items-center flex-col">
          <Image
            src="/img/subham.webp"
            alt="subham"
            width={300}
            height={800}
            className="w-80 mb-2"
          />
          <h4 className="uppercase font-graphik text-white font-semibold text-2xl">
            SHUBHAM SIKKA
          </h4>
          <p className="text-[#FACE69] font-graphik">Adobe | cars24 | Credgenics | IIT DELHI</p>
        </div>
      </div>
    </div>
  );
};

export default About;
