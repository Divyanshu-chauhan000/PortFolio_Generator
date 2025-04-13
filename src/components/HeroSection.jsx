// import React, {useEffect, useState} from 'react';
// import {motion, useScroll } from 'framer-motion';
// const images =[
//   // "https://s3-alpha.figma.com/hub/file/4779790647/9387eea0-d36c-45f8-a942-c3377401e392-cover.png",
//   // "https://peterdraw.studio/wp-content/uploads/2023/12/Taaz-Product-Designer-Portfolio-Hero-Section-Figma-Template.jpg",
//   // "https://peterdraw.studio/wp-content/uploads/2023/08/Xander-Creative-Portfolio-Hero-Section-Figma-Template.jpg",
//   // "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/deedbf184076261.654b4645dcfe9.jpg"
// ]
// const HeroSection = () => {
//   const {scrollYProgress} = useScroll(); 
//   const [selectedImage, setSelectedImage] = useState(images[0]);
//   useEffect(()=>{
//     const handleScroll =()=>{
//       const scrollPosition = window.scrollY;
//       const imageIndex =  Math.min(
//         Math.floor(scrollPosition / 300),
//         images.length-1
//       );
//       setSelectedImage(images[imageIndex]);
//     }
//     window.addEventListener("scroll", handleScroll);
//     return ()=> window.removeEventListener("scroll",handleScroll);
//   },[]);
//   return (
//     <>
//      <motion.div className='flex justify-center items-center'
//     style={{
//       backgroundImage :`linear-gradient(to top, rgba(24, 24, 24, 0.8), rgba(48, 48, 48, 0.5), transparent),url(${selectedImage})`,
//       backgroundSize : "cover",
//       backgroundPosition : "center",
//       transition : " background-image 0.5s ease-in-out",
//       height:"80vh"
//       }}>
//       <div>
//         <h1 className='text-8xl font-bold text-primary flex flex-col'>Create Your Own <span className='text-accent'>PortFolio</span></h1>
//       </div>
//     </motion.div>
//     </>
   
//   )
// }

// export default HeroSection

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import MouseTrail from '../components/cursor';
import { FaArrowCircleRight } from "react-icons/fa";
const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector("#hero")?.offsetHeight;
      const diagonal = document.querySelector(".hero-diagonal polygon");
      if (diagonal && heroHeight) {
        const skew = (window.scrollY / heroHeight) * 100;
        diagonal.setAttribute("points", `0,100 100,${skew} 100,100`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const trianglesRef = useRef([]);
  
    useEffect(() => {
      gsap.to(trianglesRef.current, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        rotation: "random(-180, 180)",
        repeat: -1,
        duration: 3,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, []);

  return (
    <>
     <MouseTrail/>
      <section
        id="hero"
        className="relative bg-cover bg-bottom m-[2vw] rounded-[25px] shadow-lg overflow-hidden"
        // style={{ backgroundImage: "url(https://picsum.photos/id/103/1900/900)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-lightpurple"></div>
        <svg
          className="hero-diagonal absolute bottom-[-0.5px] w-full h-[12vw] fill-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,100 100,0 100,100"></polygon>
        </svg>
        <main className="relative p-16 pt-[10vw] pb-[10vw] text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl font-thin max-w-xl mx-auto text-gray-900 leading-relaxed tracking-widest uppercase mb-16">
            Build Your Own <br /> <span className="font-semibold">
            Portfolio
            </span>
          </h1>
          <p className="pt-0 text-xl font-thin max-w-xl mx-auto text-gray-900 leading-relaxed tracking-widest mb-16">
            Create a stunning portfolio website with ease. <br /> Showcase your work, skills, and personality in a beautiful way.
            <br /> Start your journey today and let your creativity shine.
          </p>
          <div className="max-w-xl mx-auto text-gray-900 leading-relaxed tracking-widest uppercase mb-16  mt-3">
          <Button text="Get Started" icon ={<FaArrowCircleRight />} />
          </div>
          <div className="w-10 h-16 shadow-inner border border-gray-900 rounded-[25px] relative inline-block">
            <div className="w-2 h-2 bg-gray-900 absolute left-1/2 top-2 -ml-1 rounded-full animate-bounce"></div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (trianglesRef.current[index] = el)}
          className="triangle"
        />
      ))}
    </div>
        </main>
      </section>
  </>
  );
};

export default HeroSection;

