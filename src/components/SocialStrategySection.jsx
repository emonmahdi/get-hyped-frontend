// import React from "react";
// import { ArrowRight } from "lucide-react";

// const SocialStrategySection = () => {
//   return (
//     <section className="w-full bg-[#d9d3cb] py-12 sm:py-16 lg:py-20">
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto relative bg-[#e9e6e2] rounded-[28px] px-6 sm:px-10 lg:px-16 py-10 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
//           {/* Background Number */}
//           <span className="absolute right-6 top-4 text-[80px] sm:text-[120px] font-semibold text-black/10 select-none">
//             01
//           </span>

//           {/* LEFT CONTENT */}
//           <div className="max-w-xl w-full z-10 text-center lg:text-left">
//             <span className="inline-block text-sm bg-[#dcd7d1] text-black px-3 py-1 rounded-md mb-6">
//               Expertise
//             </span>

//             <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1.1] text-black mb-6">
//               Social strategy
//             </h2>

//             <p className="text-[16px] sm:text-[18px] text-black/80 leading-[1.6] mb-8 max-w-md mx-auto lg:mx-0">
//               <span className="font-semibold text-black">
//                 Slimme strategie. Sterke start.
//               </span>
//               <br />
//               We duiken diep in jouw merk, doelgroep en doelen. En vertalen data
//               naar een duidelijk plan met formats die echt impact maken. Zo weet
//               je precies waarom het werkt.
//             </p>

//             <div className="flex justify-center lg:justify-start">
//               <button className="group flex items-center gap-3 bg-[#ff5a2c] text-white px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:opacity-90">
//                 Meer over social strategie
//                 <span className="bg-white text-black p-1.5 rounded-md transition group-hover:translate-x-1">
//                   <ArrowRight size={16} />
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT VIDEO */}
//           <div className="w-full lg:w-auto flex justify-center lg:justify-end z-10">
//             <div className="relative rotate-[5deg]">
//               {/* Orange Border Layer */}
//               <div className="absolute inset-0 bg-[#ff5a2c] rounded-2xl translate-x-2 translate-y-2"></div>

//               {/* Video */}
//               <div className="relative rounded-2xl overflow-hidden w-[240px] sm:w-[280px] lg:w-[320px]">
//                 <video
//                   src="https://www.w3schools.com/html/mov_bbb.mp4"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialStrategySection;

import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceSection = ({
  badge = "Expertise",
  title,
  description,
  highlight,
  ctaText,
  bgColor = "#e9e6e2",
  outerBg = "#d9d3cb",
  accentColor = "#ff5a2c",
  number = "01",
  mediaType = "video", // "video" or "image"
  mediaSrc,
  variant = "rotate", // "rotate" or "frame"
}) => {
  return (
    <section
      className="w-full py-12 sm:py-16 lg:py-2"
      style={{ backgroundColor: outerBg }}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-7xl mx-auto relative rounded-[28px] px-6 sm:px-10 lg:px-16 py-10 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          {/* Background Number */}
          <span className="absolute right-6 top-4 text-[80px] sm:text-[120px] font-semibold text-black/10 select-none">
            {number}
          </span>

          {/* LEFT CONTENT */}
          <div className="max-w-xl w-full z-10 text-center lg:text-left">
            <span className="inline-block text-sm bg-white/60 text-black px-3 py-1 rounded-md mb-6">
              {badge}
            </span>

            <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1.1] text-black mb-6">
              {title}
            </h2>

            <p className="text-[16px] sm:text-[18px] text-black/80 leading-[1.6] mb-8 max-w-md mx-auto lg:mx-0">
              <span className="font-semibold text-black">{highlight}</span>
              <br />
              {description}
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                className="group flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                style={{ backgroundColor: accentColor, color: "#fff" }}
              >
                {ctaText}
                <span className="bg-white text-black p-1.5 rounded-md group-hover:translate-x-1 transition">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT MEDIA */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end z-10">
            {/* ROTATED STYLE (like Social Strategy) */}
            {variant === "rotate" && (
              <div className="relative rotate-[5deg]">
                <div
                  className="absolute inset-0 rounded-2xl translate-x-2 translate-y-2"
                  style={{ backgroundColor: accentColor }}
                ></div>

                <div className="relative rounded-2xl overflow-hidden w-[240px] sm:w-[280px] lg:w-[320px]">
                  {mediaType === "video" ? (
                    <video
                      src={mediaSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={mediaSrc}
                      alt="media"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            )}

            {/* FRAME STYLE (like Content Creation) */}
            {variant === "frame" && (
              <div className="relative rotate-[4deg]">
                <div className="bg-white p-2 rounded-2xl">
                  <div className="rounded-xl overflow-hidden w-[240px] sm:w-[280px] lg:w-[320px]">
                    <img
                      src={mediaSrc}
                      alt="media"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
