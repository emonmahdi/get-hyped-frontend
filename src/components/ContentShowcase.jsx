import React from "react";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Van nul naar vol,\nbinnen 3 weken",
    tag: "Built",
    color: "#FF4D1A",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "Zacht in smaak,\nsterk in beeld",
    tag: "Retail",
    color: "#2F80ED",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Content die écht\nsmaakt (en raakt)",
    tag: "Food",
    color: "#27AE60",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
];

const ContentShowcase = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* TOP CONTENT */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-[42px] sm:text-[60px] font-semibold leading-[1.05] text-black mb-6">
            Content
            <br />
            dat scoort.
          </h2>

          <p className="text-black/80 text-[16px] leading-[1.6] mb-6">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
            doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm w-fit">
            Bekijk al ons werk
            <span className="bg-white text-black p-1 rounded">
              <ArrowUpRight size={14} />
            </span>
          </button>
        </div>

        {/* CARDS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-end pb-36">
          {cards.map((card, index) => {
            // RIGHT → LEFT stepping
            const offset =
              index === 0
                ? "translate-y-36" // LEFT (lowest)
                : index === 1
                  ? "translate-y-12" // MIDDLE
                  : "translate-y-[-70px]"; // RIGHT (highest)

            return (
              <div key={index} className={`relative ${offset}`}>
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition h-[460px] hover:-translate-y-2"
                  style={{ border: `3px solid ${card.color}` }}
                >
                  {/* VIDEO */}
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* BOTTOM CONTENT */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5"
                    style={{ backgroundColor: card.color }}
                  >
                    <span className="text-xs bg-white/20 px-2 py-1 rounded text-white">
                      {card.tag}
                    </span>

                    <h3 className="text-white text-[16px] font-semibold mt-2 whitespace-pre-line leading-[1.3]">
                      {card.title}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
