import React from "react";
import { ArrowRight } from "lucide-react";

const SocialStrategySection = ({ image }) => {
  return (
    <section className="w-full bg-[#d9d3cb] py-10 sm:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#e9e6e2] rounded-[28px] px-6 sm:px-10 lg:px-16 py-10 sm:py-14 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
          {/* Background Number */}
          <span className="absolute right-6 top-4 text-[80px] sm:text-[120px] font-semibold text-black/10 select-none">
            01
          </span>

          {/* LEFT CONTENT */}
          <div className="max-w-xl w-full z-10">
            {/* Badge */}
            <span className="inline-block text-sm bg-[#dcd7d1] text-black px-3 py-1 rounded-md mb-6">
              Expertise
            </span>

            {/* Title */}
            <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1.1] text-black mb-6">
              Social strategy
            </h2>

            {/* Description */}
            <p className="text-[16px] sm:text-[18px] text-black/80 leading-[1.6] mb-8 max-w-md">
              <span className="font-semibold text-black">
                Slimme strategie. Sterke start.
              </span>
              <br />
              We duiken diep in jouw merk, doelgroep en doelen. En vertalen data
              naar een duidelijk plan met formats die echt impact maken. Zo weet
              je precies waarom het werkt.
            </p>

            {/* CTA */}
            <button className="group flex items-center gap-3 bg-[#ff5a2c] text-white px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:opacity-90">
              Meer over social strategie
              <span className="bg-white text-black p-1.5 rounded-md transition group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="mt-10 lg:mt-0 lg:ml-10 flex-shrink-0 z-10">
            <div className="relative rotate-[6deg]">
              {/* Orange Border Layer */}
              <div className="absolute inset-0 bg-[#ff5a2c] rounded-2xl translate-x-2 translate-y-2"></div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden w-[220px] sm:w-[260px] lg:w-[300px]">
                <img
                  src={image}
                  alt="social strategy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialStrategySection;
