"use client"
import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaEdit } from "react-icons/fa"
import Button from "../components/Button"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import Footer from "../components/Footer"

const Preview = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const portfolioRef = useRef(null)
  // const [education, setEducation] = useState([])
  const {
    name = "John Doe",
    bio = "A passionate developer eager to learn new technologies.",
    skills = [],
    // education = [
    //   {
    //     degree: "Master of Science in Computer Science",
    //     institution: "Stanford University",
    //     period: "2018 - 2020",
    //     description:
    //       "Specialized in Artificial Intelligence and Machine Learning. Thesis on Neural Networks for Natural Language Processing.",
    //   },
    //   {
    //     degree: "Bachelor of Science in Software Engineering",
    //     institution: "Massachusetts Institute of Technology",
    //     period: "2014 - 2018",
    //     description: "Graduated with honors. Participated in multiple hackathons and coding competitions.",
    //   },
    //   {
    //     degree: "Full Stack Web Development Bootcamp",
    //     institution: "Coding Academy",
    //     period: "2013",
    //     description: "Intensive 12-week program covering modern web development technologies and best practices.",
    //   },
    // ],
   education = [],
    projects = [],
    contact = {
      email: "johndoe@example.com",
      phone: "+1234567890",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    template = "template1",
  } = location.state || {}

  const skillsArray = Array.isArray(skills)
    ? skills
    : [{ name: "React" }, { name: "JavaScript" }, { name: "CSS" }, { name: "Python" }]

  const projectsArray = Array.isArray(projects)
    ? projects
    : [
        {
          title: "E-commerce Platform",
          description: "A full-featured online store with payment processing and inventory management.",
          image:
            "https://iotvnaw69daj.i.optimole.com/cb:mLvy.66914/w:auto/h:auto/q:90/f:best/https://wpshout.com/wp-content/uploads/2017/03/Best-Ecommerce-Platforms.jpg",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          demo: "https://example.com",
          github: "https://github.com",
        },
        {
          title: "Task Management App",
          description: "A productivity tool for teams to manage projects and track progress.",
          image:
            "https://www.topmobiletech.com/wp-content/uploads/2019/10/Best-Task-Management-Apps-for-Mac-1140x600.jpg",
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
          title: "Portfolio Generator",
          description: "A tool to create professional portfolios with ease.",
          image: "https://colorlib.com/wp/wp-content/uploads/sites/2/free-portfolio-website-templates.jpg",
          technologies: ["React", "Tailwind CSS", "Vite", "Firebase"],
          demo: "https://example.com",
          github: "https://github.com",
        },
      ]

  const exportAsPDF = () => {
    const input = portfolioRef.current

    if (!input) return

    // Show a loading message
    const loadingMessage = document.createElement("div")
    loadingMessage.style.position = "fixed"
    loadingMessage.style.top = "50%"
    loadingMessage.style.left = "50%"
    loadingMessage.style.transform = "translate(-50%, -50%)"
    loadingMessage.style.padding = "20px"
    loadingMessage.style.background = "rgba(0, 0, 0, 0.7)"
    loadingMessage.style.color = "white"
    loadingMessage.style.borderRadius = "10px"
    loadingMessage.style.zIndex = "9999"
    loadingMessage.textContent = "Generating PDF..."
    document.body.appendChild(loadingMessage)

    // Use setTimeout to allow the loading message to render
    setTimeout(() => {
      html2canvas(input, {
        scale: 1,
        useCORS: true,
        logging: false,
        allowTaint: true,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        })

        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()
        const imgWidth = canvas.width
        const imgHeight = canvas.height
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
        const imgX = (pdfWidth - imgWidth * ratio) / 2
        const imgY = 0

        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio)
        pdf.save(`${name.replace(/\s+/g, "_")}_Portfolio.pdf`)

        // Remove the loading message
        document.body.removeChild(loadingMessage)
      })
    }, 100)
  }

  const handleEdit = () => {
    navigate("/create")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className=" text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio Preview</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleEdit}
            className="flex items-center px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-colors"
          >
            <FaEdit className="mr-2" /> Edit
          </button>
          <button
            onClick={exportAsPDF}
            className="flex items-center px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-colors"
          >
            <FaDownload className="mr-2" /> Export as PDF
          </button>
        </div>
      </div>

      <div ref={portfolioRef} className="flex-grow">
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="font-bold text-xl">{name}</div>
            <nav className="hidden md:flex gap-6">
              <a href="#about" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </a>
              <a href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
                Skills
              </a>
              <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
                Projects
              </a>
              <a href="#education" className="text-sm font-medium hover:underline underline-offset-4">
                Education
              </a>
              <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </a>
            </nav>
            <div className="flex items-center text-xl gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-purple-600 transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-purple-600 transition-colors" />
              </a>
              <a href={`mailto:${typeof contact === "object" ? contact.email : contact}`}>
                <FaEnvelope className="hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section id="about" className="py-20 md:py-32 bg-gradient-to-r from-purple-700 to-peach">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl">{name}</h1>
                    <p className="text-lg font-medium text-white">{bio}</p>
                  </div>
                  <div className="max-w-[600px] text-white/80">
                    <p>
                      I'm a passionate developer focused on creating beautiful and functional web applications. With
                      expertise in modern web technologies, I strive to deliver exceptional user experiences.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a href="#contact">
                      <Button text="Contact Me" />
                    </a>
                    <a href="#projects">
                      <Button text="View Projects" />
                    </a>
                  </div>
                </div>
                <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
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

          {/* Skills Section */}
          <section id="skills" className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Technologies and tools I work with</p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
                {skillsArray.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 rounded-lg border p-6 hover:border-purple-400 hover:shadow-md transition-all"
                  >
                    <h3 className="text-center font-medium text-lg">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Some of my recent work</p>
                </div>
              </div>
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-2">
                {projectsArray.map((project, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-lg border bg-white shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-gray-600">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies &&
                          project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                      <div className="mt-6 flex gap-4">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                        >
                          View Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-12 md:py-24 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">My academic background</p>
      </div>
    </div>
    <div className="mx-auto max-w-3xl space-y-8 py-12">
      {Array.isArray(education) && education.length > 0 ? (
        education.map((edu, index) => (
          <div
            key={index}
            className="rounded-lg border p-6 hover:border-purple-400 hover:shadow-md transition-all"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-semibold text-xl">{edu.degree}</h3>
              <span className="text-sm text-gray-500">{edu.period}</span>
            </div>
            <p className="mt-1 text-purple-600 font-medium">{edu.institution}</p>
            <p className="mt-4 text-gray-600">{edu.description}</p>
          </div>
        ))
      ) : (
        <p>No education data available.</p>
      )}
    </div>
  </div>
</section>


          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    Get in touch for opportunities or collaborations
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-4xl gap-8 py-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-purple-100 p-3">
                      <FaEnvelope className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">
                        {typeof contact === "object" ? contact.email : contact.split(",")[0].trim()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-purple-100 p-3">
                      <FaLinkedin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-gray-600">
                        {typeof contact === "object" ? contact.linkedin : "linkedin.com/in/johndoe"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-purple-100 p-3">
                      <FaGithub className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-gray-600">
                        {typeof contact === "object" ? contact.github : "github.com/johndoe"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your message"
                    />
                  </div>
                  <Button text="Send Message" />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 px-4 sm:px-6 lg:px-8 md:h-24 md:flex-row md:py-0">
            <div className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} {name}. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-xl">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${typeof contact === "object" ? contact.email : contact}`}
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </footer>
      </div>

      <Footer />
    </div>
  )
}

export default Preview
