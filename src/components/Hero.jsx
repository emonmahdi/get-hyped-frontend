import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  const hoverIn = (el) => {
    gsap.to(el, {
      scale: 1.05,
      y: -12,
      rotate: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const hoverOut = (el) => {
    gsap.to(el, {
      scale: 1,
      y: 0,
      rotate: el.dataset.rotate,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const cardBase =
    "w-[230px] h-[310px] rounded-[26px] overflow-hidden relative shadow-lg cursor-pointer";

  return (
    <section className="bg-[#d9d2c9] w-full py-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="max-w-[700px]">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold leading-tight text-black">
            Get Hyped. Get Noticed. Get Results.
          </h1>

          <p className="mt-4 text-sm text-black">
            Klaar met gokken op content die niets oplevert?
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 max-w-full flex flex-wrap gap-6 justify-center lg:justify-start">
          {/* CARD 1 - BLUE */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            data-rotate="-6"
            style={{ transform: "rotate(-6deg)" }}
            onMouseEnter={(e) => hoverIn(e.currentTarget)}
            onMouseLeave={(e) => hoverOut(e.currentTarget)}
            className={`${cardBase} bg-blue-600 p-5 flex flex-col justify-between`}
          >
            <h2 className="text-3xl font-bold">10M+</h2>

            <div>
              <p className="text-sm font-medium">Organische views</p>
              <div className="w-full h-[2px] bg-black mt-2" />
              <p className="text-xs mt-1">Groei door slimme content</p>
            </div>
          </div>

          {/* CARD 2 - VIDEO */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            data-rotate="3"
            style={{ transform: "rotate(3deg)" }}
            onMouseEnter={(e) => hoverIn(e.currentTarget)}
            onMouseLeave={(e) => hoverOut(e.currentTarget)}
            className={cardBase}
          >
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* CARD 3 - GREEN */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            data-rotate="6"
            style={{ transform: "rotate(6deg)" }}
            onMouseEnter={(e) => hoverIn(e.currentTarget)}
            onMouseLeave={(e) => hoverOut(e.currentTarget)}
            className={`${cardBase} bg-emerald-500 p-5 flex flex-col justify-between`}
          >
            <h2 className="text-3xl font-bold">30+</h2>

            <div>
              <p className="text-sm font-medium">Merken geholpen</p>
              <div className="w-full h-[2px] bg-black mt-2" />
              <p className="text-xs mt-1">Van start-up tot multinational</p>
            </div>
          </div>

          {/* CARD 4 - VIDEO */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            data-rotate="-3"
            style={{ transform: "rotate(-3deg)" }}
            onMouseEnter={(e) => hoverIn(e.currentTarget)}
            onMouseLeave={(e) => hoverOut(e.currentTarget)}
            className={cardBase}
          >
            <video
              src="https://www.w3schools.com/html/movie.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-20 max-w-[720px]">
          <p className="text-[22px] sm:text-[28px] font-semibold leading-snug text-black">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
            raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </p>
        </div>
      </div>
    </section>
  );
}
