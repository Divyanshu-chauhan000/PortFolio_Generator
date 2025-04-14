import React from "react"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../contexts/AuthContext"
import Footer from "../components/Footer"
import { FaGoogle, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)
  const navigate = useNavigate()
  const { login } = useContext(Authcontext)

  const handleAuth = async (e) => {
    e.preventDefault()
    try {
      localStorage.setItem('isAuth', "true")
      // localStorage.setItem('user', JSON.stringify({ email}))
      login()
      alert(isSignUp ? "Account created successfully!" : "Login successful")
      navigate("/create")
    } catch (error) {
      alert("Authentication failed")
    }
  }

  const handleDemoLogin = () => {
    localStorage.setItem('isAuth', "true")
    // localStorage.setItem('user', JSON.stringify({ email : "demo@portfolio.com"}))
    login()
    alert("Demo login successful")
    navigate("/create")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {isSignUp ? "Create your account" : "Sign in to your account"}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {isSignUp
                ? "Join thousands of professionals creating portfolios"
                : "Welcome back! Please enter your details"}
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleAuth}>
            <div className="rounded-md shadow-sm space-y-2">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-t-md relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={isSignUp ? "new-password" : "current-password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none rounded-b-md relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                {isSignUp ? "Sign up" : "Sign in"}
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleDemoLogin}
                className="text-sm font-medium text-purple-600 hover:text-purple-500"
              >
                Use demo account (no sign up required)
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <FaGoogle className="h-5 w-5 text-red-500" />
                  <span className="ml-2">Google</span>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <FaFacebook className="h-5 w-5 text-blue-600" />
                  <span className="ml-2">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-1 font-medium text-purple-600 hover:text-purple-500"
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login