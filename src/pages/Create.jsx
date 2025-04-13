import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { FaArrowCircleRight } from 'react-icons/fa';

const Create = ()=>{
  const navigate = useNavigate();

  const [name , setName] = useState("Dev Rajput");
  const [bio, setBio] = useState("A passionate developer with a knack for creating innovative solutions.");
  const [skills, setSkills] = useState(" JavaScript, React, Node.js, CSS, HTML");
  const [education, setEducation] = useState("Bachelor of Technology in Computer Science, XYZ University, 2023");
  const [projects, setProjects] = useState(" Personal Project 1");
  const [contact, setContact] = useState(" devrajput@gmail.com, +91 1234567890");
  const [template, setTemplate] = useState("template1");
  
  
  const handlePreview = () => {
    console.log("Preview clicked");
    navigate("/preview", { state: { name, bio, skills, projects, template, contact } });
  };
  // const exportAsPDF = () => {
  //   const input = document.getElementById("portfolio-preview");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
  //     pdf.save("Portfolio.pdf");
  //   });
  // }
  return (
   <div className='w-full px-[30%] py-[5%] h-[90vh]  '>
    <div>
     <h1 className='text-center pb-20 font-bold text-5xl text-gray-700'>Create Your Own PortFolio</h1>
     <div>
      <div className='bg-gradient-to-r from-purple-700 to-peach p-6 rounded-lg shadow-lg'>
        <label className='block mb-2 text-white mt-2'>Full Name :</label>
        <input className='w-full  p-2 rounded text-gray-400' value={name} onChange={(e)=>setName(e.target.value) }/>

        <label className='block mb-2 text-white mt-2'>Bio :</label>
        <input className='w-full  p-2 rounded text-gray-400'value={bio} onChange={(e)=>setBio(e.target.value) }/>

        <label className='block mb-2 text-white mt-2'>Skills :</label>
        <input className='w-full  p-2 rounded text-gray-400'value={skills} onChange={(e)=>setSkills(e.target.value) }/>

        <label className='block mb-2 text-white mt-2'>Education :</label>
        <input className='w-full  p-2 rounded text-gray-400'value={education} onChange={(e)=>setEducation(e.target.value) }/>

        <label className='block mb-2 text-white mt-2'>Projects :</label>
        <input className='w-full  p-2 rounded text-gray-400'value={projects} onChange={(e)=>setProjects(e.target.value) }/>

        <label className='block mb-2 text-white mt-2'>Contact :</label>
        <input className='w-full  p-2 rounded text-gray-400'value={contact} onChange={(e)=>setContact(e.target.value) }/>

        <label className="block mb-2 text-white mt-2">Choose Template:</label>
        <select className="w-full p-2 mb-4 text-gray-400 rounded" name="" id="" onChange={(e) => setTemplate(e.target.value)}>
          <option value="template1">Classic</option>
          <option value="template2">Modern</option>
        </select>
      </div>
      <div className='mt-3'>
      <Button onClick={handlePreview} text='Preview' icon={<FaArrowCircleRight/>}/>
      </div>
     </div>
    </div>
    {/* <motion.div id="portfolio-preview" className="p-6 bg-gray-800 rounded-lg shadow-lg">
          {template === "template1" ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-sm text-gray-400">{bio}</p>
              <p className="mt-4"> Skills: {skills}</p>
              <p className="mt-2"> Projects: {projects}</p>
            </div>
          ) : (
            <div className="border-l-4 border-blue-500 pl-4">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="italic">{bio}</p>
              <p className="mt-4 font-semibold">Skills:</p>
              <p>{skills}</p>
              <p className="mt-4 font-semibold">Projects:</p>
              <p>{projects}</p>
            </div>
          )}
        </motion.div>
        <div className="text-center mt-6">
        <Button text="Export as PDF" onClick={exportAsPDF} />
      </div> */}
    
   </div>
  )
}
export default Create