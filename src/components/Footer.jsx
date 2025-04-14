import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <img src={logo} width={120} alt="" />
            </h3>
            <p className="text-sm">
              Create stunning portfolio websites with ease. Showcase your work, skills, and personality in a beautiful
              way.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-peach transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/examples" className="hover:text-peach transition duration-300">
                  Examples
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-peach transition duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/learn" className="hover:text-peach transition duration-300">
                  Learn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learn" className="hover:text-peach transition duration-300">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/examples" className="hover:text-peach transition duration-300">
                  Templates
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-peach transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-peach transition duration-300">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-peach transition duration-300">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-peach transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-peach transition duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-peach transition duration-300">
                <FaInstagram />
              </a>
            </div>
            <p className="mt-4 text-sm">Subscribe to our newsletter</p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Your email" className="px-3 py-2 text-gray-700 rounded-l-md w-full" />
              <button className="bg-peach text-purple-700 font-semibold px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-purple-500 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PortFolio Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
