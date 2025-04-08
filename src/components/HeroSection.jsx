import React, {useEffect, useState} from 'react';
import {motion, useScroll } from 'framer-motion';
const images =[
  // "https://s3-alpha.figma.com/hub/file/4779790647/9387eea0-d36c-45f8-a942-c3377401e392-cover.png",
  // "https://peterdraw.studio/wp-content/uploads/2023/12/Taaz-Product-Designer-Portfolio-Hero-Section-Figma-Template.jpg",
  // "https://peterdraw.studio/wp-content/uploads/2023/08/Xander-Creative-Portfolio-Hero-Section-Figma-Template.jpg",
  // "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/deedbf184076261.654b4645dcfe9.jpg"
]
const HeroSection = () => {
  const {scrollYProgress} = useScroll(); 
  const [selectedImage, setSelectedImage] = useState(images[0]);
  useEffect(()=>{
    const handleScroll =()=>{
      const scrollPosition = window.scrollY;
      const imageIndex =  Math.min(
        Math.floor(scrollPosition / 300),
        images.length-1
      );
      setSelectedImage(images[imageIndex]);
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <>
     <motion.div className='flex justify-center items-center'
    style={{
      backgroundImage :`linear-gradient(to top, rgba(24, 24, 24, 0.8), rgba(48, 48, 48, 0.5), transparent),url(${selectedImage})`,
      backgroundSize : "cover",
      backgroundPosition : "center",
      transition : " background-image 0.5s ease-in-out",
      height:"80vh"
      }}>
      <div>
        <h1 className='text-8xl font-bold text-primary flex flex-col'>Create Your Own <span className='text-accent'>PortFolio</span></h1>
      </div>
    </motion.div>
    </>
   
  )
}

export default HeroSection