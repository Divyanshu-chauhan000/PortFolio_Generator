import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import Button from '../components/Button'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
const Preview = () => {
  const location = useLocation();
  const {
    name = "John Doe",
    bio = "A passionate developer eager to learn new technologies.",
    skills = [
     
    ],
    education = [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        period: "2018 - 2020",
        description:
          "Specialized in Artificial Intelligence and Machine Learning. Thesis on Neural Networks for Natural Language Processing.",
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "Massachusetts Institute of Technology",
        period: "2014 - 2018",
        description: "Graduated with honors. Participated in multiple hackathons and coding competitions.",
      },
      {
        degree: "Full Stack Web Development Bootcamp",
        institution: "Coding Academy",
        period: "2013",
        description: "Intensive 12-week program covering modern web development technologies and best practices.",
      },
    ],
    
    projects =[
    
    ],
    contact = {
      email: "johndoe@example.com",
      phone: "+1234567890",
      github:"https://gitjhub.com/johndoe",
      linkedin:"https://linkedin.com/in/johndoe"
    },
    template = "template1",
  } = location.state || {};
  const skillsArray = Array.isArray(skills)? skills : [
    { name: "React" },
      { name: "JavaScript"},
      { name: "CSS"},
      { name: "Python" },
  ]

  const projectsArray = Array.isArray(projects) ? projects : [ {
    title: "E-commerce Platform",
    description: "A full-featured online store with payment processing and inventory management.",
    image: "https://iotvnaw69daj.i.optimole.com/cb:mLvy.66914/w:auto/h:auto/q:90/f:best/https://wpshout.com/wp-content/uploads/2017/03/Best-Ecommerce-Platforms.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for teams to manage projects and track progress.",
    image: "https://www.topmobiletech.com/wp-content/uploads/2019/10/Best-Task-Management-Apps-for-Mac-1140x600.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with interactive maps.",
    image: "https://vuejsexamples.com/content/images/2019/12/The-Weather-Dashboard.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js", "Mapbox"],
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with interactive maps.",
    image: "https://vuejsexamples.com/content/images/2019/12/The-Weather-Dashboard.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js", "Mapbox"],
    demo: "https://example.com",
    github: "https://github.com",
  },];
const exportAsPDF = ()=>{
  const input = document.getElementById("portfolio-preview");
  html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
        pdf.save("Portfolio.pdf");
      });
}  
  return (
    <div className='flex w-full min-h-screen flex-col'>
        <header className='sticky top-0 z-10 bg-white border:b border-gray-800 box'>
        <div className=' flex h-16 items-center justify-between '>
          <div className='font-bold text-xl '>{name}</div>
          <nav className='hidden md:flex gap-6 '>
                <Link to="" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
                <Link to="" className="text-sm font-medium hover:underline underline-offset-4">Skills</Link>
                <Link to="" className="text-sm font-medium hover:underline underline-offset-4">Projects</Link>
                <Link to="" className="text-sm font-medium hover:underline underline-offset-4">Education</Link>
                <Link to="" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
          </nav>
          <div className='flex item-center text-xl gap-4'> 
            <Link to=""> <FaGithub/> </Link>
            <Link to=""><FaLinkedin/></Link>
            <Link to=""><FaEnvelope/></Link>
          </div>
        </div>
        </header>
       <main className='flex-1 box '>
       <section className='py-20 md:py-32 bg-gradient-to-r from-purple-700 to-peach  rounded-[30px]'>
          <div className='px-4 md:px-6'>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
           <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl /none'>{name}</h1>
                <p className='text-lg font-medium'>{bio}</p>
              </div>
              <div className='max-w-[600px] text-gray-500 dark:text-gray-400'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam hic? Dolorem ipsa, molestiae atque voluptas expedita magni nobis error id fugiat, aliquam dicta alias?                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                   <Link to=""><Button text="Contact Me"/></Link>
                   <Link to=""><Button text="View Projects"/></Link>
              </div>
           </div>
           <div className='mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'>
           <img
                  alt="Profile"
                  className="aspect-square h-full w-full object-cover"
                  height="500"
                  src="https://r2.erweima.ai/imgcompressed/img/compressed_a629a7869316bddfdd12ad9bd8683db7.webp"
                  width="500"
                />
           </div>
          </div>
          </div>
        </section>
        {/* skill section */}
        <section className='py-12 md:py-12'> 
         <div className='px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Technologies and tools I work with
                </p>
          </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
              {skillsArray.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border p-4 dark:border-gray-800"
                >
                  {/* <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">{skill.icon}</div> */}
                  <h3 className="text-center font-medium">{skill.name}</h3>
                </div>
              ))}
            </div>
         </div>
        </section>
        {/* Projects Section */}

        <section className='py-12 md:py-12 box'> 
         <div className='px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Some of my recent work
                </p>
          </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
              {projectsArray.map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col items-center space-y-2 rounded-lg border p-4 dark:border-gray-800"
                >
                 <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      width="400"
                      height="225"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Link href={project.demo} >
                        <Button className="" text="Demo"/>
                      </Link>
                      <Link href={project.github} >
                        <Button text="Code"/>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </div>
        </section>
        {/* Education Section */}
        <section id="education" className="py-12 md:py-24">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  My academic background
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              {education.map((edu) => (
                <div key={edu.degree} className="rounded-lg border p-6 dark:border-gray-800">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">{edu.institution}</p>
                  <p className="mt-4 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 ">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get in touch for opportunities or collaborations
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaLinkedin className="h-6 w-6" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">linkedin.com/in/johndoe</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGithub className="h-6 w-6" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">github.com/johndoe</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button text="Submit"/>
              </div>
            </div>
          </div>
        </section>
       </main>
      {/* footer section  */}
      <footer className="border-t border-gray-200 bg-white box" >
        <div className=" flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xl">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">

                <FaGithub  />

            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin  />
             
            </Link>
            <Link href="mailto:john.doe@example.com">
              <FaEnvelope/>
            </Link>
          </div>
        </div>
      </footer>
        {/* <motion.div>
          <Button onClick={exportAsPDF} text="Export As PDF"/>
        </motion.div> */}
      </div>
    
  )
}

export default Preview