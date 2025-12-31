import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../navbar";
// function Homepage() {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/" replace />; // redirect if token missing
//   }

//   return <h1>Welc
// }

// export default Homepage;

import {
  Menu,
  Check,
  Award,
  Code,
  Users,
  Briefcase,
  MapPin,
  Phone,
  Mail,
} from "react-feather";

export default function Homepage() {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState("login");

  return (
    <div className="bg-gray-50">
      {/* NAVBAR */}
   
<Navbar />
      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 text-center"
      >
        <h1 className="text-5xl font-bold mb-6">
          VJ Innovate Software Solutions
        </h1>
        <p className="text-2xl text-blue-200 mb-6">
          Empowering the next generation of developers
        </p>
        <p className="max-w-3xl mx-auto text-blue-300 mb-10">
          Professional software development services, programming courses, and
          industry-focused internships.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => (window.location.href = "/courses")}
            className="bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600"
          >
            Explore Courses
          </button>
          <button
            onClick={() => (window.location.href = "/services")}
            className="border-2 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900"
          >
            Our Services
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        </div>
      </section>




      

      {/* INTERNSHIP */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          Internship Program
        </h2>

        <div
          className="service-card bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in animate-fade-in"
          style={{ transform: "translateY(0px)" }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* E-commerce Card */}
            <div
              className="service-card bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in animate-fade-in"
              style={{ transform: "translateY(0px)" }}
            >
              <div className="flex items-center mb-6">
                <img
                  src="./icons/ecommerce.svg"
                  alt="E-commerce Development"
                  className="h-12 w-12 mr-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  E-commerce Development
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Complete e-commerce solutions built with modern technologies.
                From custom shopping carts to payment gateway integration, we
                deliver scalable online stores that drive sales.
              </p>

              <ul className="text-gray-600 space-y-2">
                {[
                  "Custom E-commerce Platforms",
                  "Payment Gateway Integration",
                  "Mobile-Responsive Design",
                  "SEO Optimization",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-secondary mr-2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Web Development Card */}
            <div
              className="service-card bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in animate-fade-in"
              style={{ transform: "translateY(0px)" }}
            >
              <div className="flex items-center mb-6">
                <img
                  src="./icons/webdev.svg"
                  alt="Web Development"
                  className="h-12 w-12 mr-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  Web Development
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Professional web applications and websites built with the latest
                technologies. We create fast, secure, and user-friendly digital
                experiences.
              </p>

              <ul className="text-gray-600 space-y-2">
                {[
                  "Full-Stack Development",
                  "API Development & Integration",
                  "Database Design",
                  "Cloud Deployment",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-secondary mr-2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          <Card icon={<Award />} title="Industry Training" />
          <Card icon={<Code />} title="Hands-on Projects" />
          <Card icon={<Users />} title="Expert Mentors" />
          <Card icon={<Briefcase />} title="Placement Assistance" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4">
          <div>
            <p className="flex items-center mb-3">
              <MapPin className="mr-3 text-orange-500" /> 123 Tech Street
            </p>
            <p className="flex items-center mb-3">
              <Phone className="mr-3 text-orange-500" /> +91 9440436178
            </p>
            <p className="flex items-center mb-3">
              <Mail className="mr-3 text-orange-500" /> sksam3680@gmail.com
            </p>
          </div>

          <form className="space-y-4">
            <input
              className="w-full border p-3 rounded-lg"
              placeholder="Name"
            />
            <input
              className="w-full border p-3 rounded-lg"
              placeholder="Email"
            />
            <textarea
              className="w-full border p-3 rounded-lg"
              placeholder="Message"
            />
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white text-center py-6">
        © 2025 VJ Innovate Software Solutions Pvt Ltd
      </footer>
    </div>
  );
}

/* Reusable Card */
function Card({ icon, title }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl text-center">
      <div className="text-orange-500 mx-auto mb-4">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
  );
}
