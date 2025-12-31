import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/icons/html.svg" alt="Logo" className="h-10 w-10 mr-3" />
          <span className="text-xl font-bold text-blue-900">VJ Innovate</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-blue-900 font-medium">Home</a>

          <button onClick={() => (window.location.href = "/services")}
            className="hover:text-orange-500">
            Services
          </button>

          <button onClick={() => (window.location.href = "/courses")}
            className="hover:text-orange-500">
            Courses
          </button>

          <button onClick={() => (window.location.href = "/internship")}
            className="hover:text-orange-500">
            Internship
          </button>

          <button onClick={() => (window.location.href = "/contact")}
            className="hover:text-orange-500">
            Contact
          </button>

          

          <button
            onClick={() => (window.location.href = "/jobs")}
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Jobs
          </button>

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => (window.location.href = "/login")}
                className="text-blue-900 font-medium"
              >
                Login
              </button>

              <button
                onClick={() => (window.location.href = "/register")}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                window.location.href = "/";
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple SVG Hamburger */}
          <svg
            className="w-7 h-7 text-blue-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-3">
          <a href="/" className="block hover:text-orange-500">Home</a>
          <a href="/services" className="block hover:text-orange-500">Services</a>
          <a href="/courses" className="block hover:text-orange-500">Courses</a>
          <a href="/internship" className="block hover:text-orange-500">Internship</a>
          <a href="/contact" className="block hover:text-orange-500">Contact</a>

          <a href="/create"
            className="block border border-orange-500 text-orange-500 text-center py-2 rounded-lg">
            Create
          </a>

          <a href="/jobs"
            className="block bg-blue-900 text-white text-center py-2 rounded-lg">
            Jobs
          </a>

          {!isLoggedIn ? (
            <>
              <a href="/login" className="block text-center">Login</a>
              <a href="/register"
                className="block bg-orange-500 text-white text-center py-2 rounded-lg">
                Register
              </a>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                window.location.href = "/";
              }}
              className="block w-full bg-red-500 text-white py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
