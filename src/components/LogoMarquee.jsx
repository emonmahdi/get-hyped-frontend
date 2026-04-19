import React from "react";

const logos = [
  "/logos/knltb.svg",
  "/logos/tao.svg",
  "/logos/talententuin.svg",
  "/logos/zwartecross.svg",
  "/logos/bullit.svg",
];

const LogoMarquee = () => {
  return (
    <section className="w-full bg-[#d9d3cb] py-16 overflow-hidden">
      {/* TITLE (still centered container) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12">
        <h2 className="text-[40px] sm:text-[60px] font-semibold leading-[1.05] text-black">
          These brands
          <br />
          got hyped.
        </h2>
      </div>

      {/* FULL-WIDTH MARQUEE */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges (pro look) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#d9d3cb] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#d9d3cb] to-transparent z-10" />

        {/* TRACK */}
        <div className="flex w-[200%] animate-marquee">
          {/* GROUP */}
          <div className="flex gap-8 px-6">
            {logos.map((logo, i) => (
              <div
                key={`logo-${i}`}
                className="flex items-center justify-center bg-[#e6e0d8] border border-black/10 rounded-xl w-[220px] sm:w-[260px] h-[200px] flex-shrink-0 p-6 hover:-translate-y-1 transition"
              >
                <img
                  src={logo}
                  alt="brand"
                  className="w-full h-full object-contain max-h-[60px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>

          {/* DUPLICATE GROUP */}
          <div className="flex gap-8 px-6">
            {logos.map((logo, i) => (
              <div
                key={`logo-dup-${i}`}
                className="flex items-center justify-center bg-[#e6e0d8] border border-black/10 rounded-xl w-[200px] sm:w-[240px] h-[200px] flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="brand"
                  className="max-h-[50px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
