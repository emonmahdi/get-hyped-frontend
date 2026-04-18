import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceSection from "./ServiceSection";

gsap.registerPlugin(ScrollTrigger);

const ServicesScroll = () => {
  const containerRef = useRef();

  useEffect(() => {
    const sections = gsap.utils.toArray(".service-panel");

    sections.forEach((section, i) => {
      if (i === sections.length - 1) return;

      gsap.to(section, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef}>
      <div className="service-panel">
        <ServiceSection {...section1} />
      </div>
      <div className="service-panel">
        <ServiceSection {...section2} />
      </div>
      <div className="service-panel">
        <ServiceSection {...section3} />
      </div>
      <div className="service-panel">
        <ServiceSection {...section4} />
      </div>
    </div>
  );
};

export default ServicesScroll;

// import React, { useEffect, useRef } from "react";
// import ServiceSection from "./ServiceSection";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ServicesStack = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".panel");

//     sections.forEach((section, i) => {
//       if (i === sections.length - 1) return;

//       const next = sections[i + 1];

//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: "+=100%",
//             scrub: true,
//             pin: true,
//             pinSpacing: false,
//           },
//         })
//         .to(section, {
//           scale: 0.92,
//           opacity: 0.4,
//           ease: "none",
//         })
//         .fromTo(next, { yPercent: 100 }, { yPercent: 0, ease: "none" }, 0);
//     });
//   }, []);

//   return (
//     <div ref={containerRef}>
//       <div className="panel">
//         <ServiceSection
//           title="Social strategy"
//           highlight="Slimme strategie. Sterke start."
//           description="We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die echt impact maken. Zo weet je precies waarom het werkt."
//           ctaText="Meer over social strategie"
//           accentColor="#ff5a2c"
//           bgColor="#e9e6e2"
//           outerBg="#d9d3cb"
//           number="01"
//           mediaType="video"
//           variant="rotate"
//           mediaSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//         />
//       </div>

//       <div className="panel">
//         <ServiceSection
//           title="Content creation"
//           highlight="Content die opvalt en raakt."
//           description="We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen."
//           ctaText="Meer over content creatie"
//           accentColor="#000000"
//           bgColor="#d69ad6"
//           outerBg="#d9d3cb"
//           number="02"
//           mediaType="image"
//           variant="frame"
//           mediaSrc="/your-image.jpg"
//         />
//       </div>

//       <div className="panel">
//         <ServiceSection
//           title="Activation"
//           highlight="Zichtbaar waar en wanneer het telt."
//           description="De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt."
//           ctaText="Meer over activatie"
//           accentColor="#000000"
//           bgColor="#39B487"
//           outerBg="#d9d3cb"
//           number="03"
//           mediaType="image"
//           variant="frame"
//           mediaSrc="/activation-image.jpg"
//         />
//       </div>

//       <div className="panel">
//         <ServiceSection
//           title="Data"
//           highlight="Inzichten die impact maken."
//           description="We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij."
//           ctaText="Meer over data"
//           accentColor="#000000"
//           bgColor="#2486D6"
//           outerBg="#d9d3cb"
//           number="04"
//           mediaType="image"
//           variant="frame"
//           mediaSrc="/data-image.jpg"
//         />
//       </div>
//     </div>
//   );
// };

// export default ServicesStack;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { services } from "../data/servicesData";
// import ServiceSection from "./SocialStrategySection";

// gsap.registerPlugin(ScrollTrigger);

// const ServicesStack = () => {
//   const containerRef = useRef();

//   //   useEffect(() => {
//   //     const panels = gsap.utils.toArray(".panel");

//   //     gsap.to(panels, {
//   //       yPercent: -100 * (panels.length - 1),
//   //       ease: "none",
//   //       scrollTrigger: {
//   //         trigger: containerRef.current,
//   //         pin: true,
//   //         scrub: 1,
//   //         snap: 1 / (panels.length - 1),
//   //         end: () => "+=" + window.innerHeight * panels.length,
//   //       },
//   //     });
//   //   }, []);

//   useEffect(() => {
//     const panels = gsap.utils.toArray(".panel");

//     gsap.to(panels, {
//       yPercent: -100 * (panels.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 1,
//         snap: 1 / (panels.length - 1),
//         end: () => "+=" + window.innerHeight * panels.length,
//       },
//     });
//   }, []);

//   return (
//     <div ref={containerRef} className="relative h-screen">
//       <div className="panels">
//         {services.map((service, index) => (
//           <div className="panel" key={index}>
//             <ServiceSection {...service} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesStack;
