"use client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { FaArrowCircleRight } from "react-icons/fa"
import Footer from "../components/Footer"

const Create = () => {
  const navigate = useNavigate()
  // const { state } = useLocation();
  const [name, setName] = useState("Dev Rajput")
  const [bio, setBio] = useState("A passionate developer with a knack for creating innovative solutions.")
  const [skills, setSkills] = useState("JavaScript, React, Node.js, CSS, HTML")
  const [education, setEducation] = useState(`Bachelor of Technology in Computer Science | XYZ University | 2023 | Learned full-stack development`)
  const [projects, setProjects] = useState("Personal Project 1")
  const [contact, setContact] = useState("devrajput@gmail.com, +91 1234567890")
  const [template, setTemplate] = useState("template1")

  const handlePreview = () => {
    console.log("Preview clicked")
    // const { name, bio, skills, education, projects, template, contact } = state || {};
    const skillsArray = skills.split(",").map((skill) => ({ name: skill.trim() }))
    const educationArray = education.split('\n').map((edu)=>{
      const [degree, institution, period, descriptions] = edu.split('|').map((item)=>item.trim());
      return { degree, institution, period, descriptions };
  });
    navigate("/preview", {
      state: {
        name,
        bio,
        skills: skillsArray,
        education : educationArray ,
        projects,
        template,
        contact,
      },
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-center pb-10 font-bold text-4xl text-gray-800">Create Your Portfolio</h1>

          <div className="bg-gradient-to-r from-purple-700 to-peach p-8 rounded-lg shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-white font-medium">Full Name</label>
                <input
                  className="w-full p-3 rounded-md text-gray-700 border-0 focus:ring-2 focus:ring-purple-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block mb-2 text-white font-medium">Contact Information</label>
                <input
                  className="w-full p-3 rounded-md text-gray-700 border-0 focus:ring-2 focus:ring-purple-400"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Email, phone, social media links"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-white font-medium">Bio</label>
                <textarea
                  className="w-full p-3 rounded-md text-gray-700 border-0 focus:ring-2 focus:ring-purple-400"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={3}
                  placeholder="Write a short bio about yourself"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-white font-medium">Skills</label>
                <textarea
                  className="w-full p-3 rounded-md text-gray-700 border-0 focus:ring-2 focus:ring-purple-400"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  rows={2}
                  placeholder="List your skills separated by commas"
                />
                <p className="mt-1 text-sm text-white opacity-80">
                  Separate skills with commas (e.g., JavaScript, React, CSS)
                </p>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-white font-medium">Education</label>
                <textarea
                  className="w-full p-3 rounded-md text-gray-700 border-0 focus:ring-2 focus:ring-purple-400"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  rows={2}
                  placeholder={`Enter each education entry on a new line:\nDegree | Institution | Period | Description\nExample:\nB.Tech | XYZ University | 2023 | Learned full-stack development\nM.Tech | ABC Institute | 2025 | Specialized in AI`}></textarea>
                  <p className="mt-1 text-sm text-white opacity-80">
                  {`Enter each education entry on a new line:\nDegree | Institution | Period | Description\nExample:\nB.Tech | XYZ University | 2023 | Learned full-stack development\nM.Tech | ABC Institute | 2025 | Specialized in AI`}
                  </p>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-white font-medium">Projects</label>
                <textarea
                  className="w-full p-3 rounded-md text-gray-700 border-0 focus:ring-2 focus:ring-purple-400"
                  value={projects}
                  onChange={(e) => setProjects(e.target.value)}
                  rows={3}
                  placeholder="Describe your projects"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-white font-medium">Choose Template</label>
                <select
                  className="w-full p-3 rounded-md text-gray-700 border-0 focus:ring-2 focus:ring-purple-400"
                  value={template}
                  onChange={(e) => setTemplate(e.target.value)}
                >
                  <option value="template1">Classic</option>
                  <option value="template2">Modern</option>
                  <option value="template3">Minimalist</option>
                  <option value="template4">Creative</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button onClick={handlePreview} text="Preview Portfolio" icon={<FaArrowCircleRight />} />
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Tips for a Great Portfolio</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Keep your bio concise and focused on your professional strengths</li>
              <li>List your most relevant skills first</li>
              <li>Include detailed descriptions of your most impressive projects</li>
              <li>Make sure your contact information is up-to-date</li>
              <li>Choose a template that best represents your personal brand</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Create
