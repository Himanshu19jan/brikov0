// import Image from "next/image";
// import React from "react";

// const Testimonal = () => {
//   return (
//     <div className="container-body bg-[#E75250] py-8 md:py-24 flex justify-center items-center flex-col text-white">
//       <h4 className="text-3xl md:text-5xl font-graphik font-bold">
//         What our happy client say
//       </h4>
//       <p className="font-graphik text-lg">
//         Several selected clients, who already believe in our service.
//       </p>
//       <div className="grid grid-cols-3 items-center gap-2 mt-4 md:mt-16">
//         <div className="col-span-1 flex items-center justify-end">
//         <Image src="/img/t-p.png" height={400} width={400} alt="testimonal" />
//         </div>
//         <div className="col-span-1">
//           <h5 className="text-xl md:text-4xl font-graphik font-bold">
//             Ajinkay Paul
//           </h5>
//           <p className="font-graphik text-lg">
//           BRIKO made my property search effortless! 
//           I found a verified auction property at an incredible price, and the entire process was smooth and transparent. 
//           Thanks to their reliable platform, I secured a great deal hassle-free. 
//           Highly recommend BRIKO for anyone looking for auction properties in India!
//           </p>
//         </div>
//         <div className="col-span-1 flex items-center justify-end">
//             <Image src="/img/t-g.png" height={320} width={320} alt="testimonal" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonal;

import Image from "next/image";
import React from "react";

const Testimonal = () => {
  return (
    <div className="container-body bg-[#E75250] py-8 md:py-24 flex justify-center items-center flex-col text-white">
      {/* Heading */}
      <h4 className="text-2xl sm:text-3xl md:text-5xl font-graphik font-bold text-center">
        What our happy clients say
      </h4>
      <p className="font-graphik text-sm sm:text-lg text-center mt-2">
        Several selected clients, who already believe in our service.
      </p>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 sm:gap-8 mt-4 md:mt-16 w-full px-4 sm:px-8">
        {/* Left Image */}
        <div className="flex items-center justify-center md:justify-end">
          <Image
            src="/img/t-p.png"
            height={200}
            width={200}
            layout="intrinsic"
            alt="testimonal"
            className="w-2/3 sm:w-1/2 md:w-full"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h5 className="text-lg sm:text-2xl md:text-4xl font-graphik font-bold">
            Ajinkay Paul
          </h5>
          <p className="font-graphik text-sm sm:text-lg mt-2 leading-relaxed">
            BRIKO made my property search effortless! I found a verified auction
            property at an incredible price, and the entire process was smooth
            and transparent. Thanks to their reliable platform, I secured a
            great deal hassle-free. Highly recommend BRIKO for anyone looking
            for auction properties in India!
          </p>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center md:justify-start">
          <Image
            src="/img/t-g.png"
            height={200}
            width={200}
            layout="intrinsic"
            alt="testimonal"
            className="w-2/3 sm:w-1/2 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
