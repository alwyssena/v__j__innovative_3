import React, { useEffect, useState } from "react";
import feather from "feather-icons";

export default function ContactPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="/assets/icons/logo.svg"
                alt="VJ Innovate Logo"
                className="h-10 w-10 mr-3"
              />
              <span className="text-xl font-bold text-primary">
                VJ Innovate
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="nav-link text-gray-700 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="nav-link text-gray-700 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="/courses"
                  className="nav-link text-gray-700 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Courses
                </a>
                <a
                  href="/internship"
                  className="nav-link text-gray-700 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Internship
                </a>
                <a
                  href="/contact"
                  className="nav-link text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-700 hover:text-secondary"
              >
                <i data-feather="menu" className="h-6 w-6"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-2">
            <a href="/" className="block">
              Home
            </a>
            <a href="/services" className="block">
              Services
            </a>
            <a href="/courses" className="block">
              Courses
            </a>
            <a href="/internship" className="block">
              Internship
            </a>
            <a href="/contact" className="block text-primary">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Get in touch with us to start your journey
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-secondary mb-8"></div>

            {/* <Info icon="map-pin" title="Office Address" text="123 Tech Street, Innovation Hub, India" />
            <Info icon="phone" title="Phone" text="+91 9440436178" />
            <Info icon="mail" title="Email" text="internship@vjinnovate.com" />
            <Info icon="clock" title="Business Hours" text="Mon–Fri: 9 AM – 7 PM" /> */}
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form
              action="https://formspree.io/f/mblkbzbl"
              method="POST"
              className="space-y-6"
            >
              <input
                name="firstName"
                placeholder="First Name"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                required
                className="w-full p-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                pattern="[6-9][0-9]{9}"
                maxLength={10}
                inputMode="numeric"
                required
                className="w-full p-3 border rounded-lg"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
                className="w-full p-3 border rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Visit our office for in-person consultations and discussions
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="aspect-video">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.986!3d40.748"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe> */}
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Can't find our office? Call us for directions!
              </p>
              <a
                href="tel:+919876543210"
                className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
              >
                <i data-feather="phone" className="h-5 w-5"></i>
                Call for Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-blue-200">
          Contact us today to discuss your requirements and take the first step
          towards your goals.
        </p>
        <div className="space-x-4">
          <a
            href="tel:+919876543210"
            className="bg-secondary hover:bg-orange-600 px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Call Now
          </a>
          <a
            href="mailto:info@vjinnovate.com"
            className="border-2 border-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>
          © 2025 VJ Innovate Software Solutions Pvt Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const faqData = [
  {
    q: "What services do you offer?",
    a: "We offer software development, courses, internships, and custom solutions.",
  },
  {
    q: "How long are your courses?",
    a: "Courses range from 2–6 months with flexible schedules.",
  },
  {
    q: "Do you provide job placement assistance?",
    a: "Yes, 100% placement assistance for internship graduates.",
  },
  {
    q: "Can I take courses online?",
    a: "Yes, we provide both online and in-person options.",
  },
  {
    q: "What are the prerequisites?",
    a: "Basic computer knowledge; advanced courses may need prior experience.",
  },
];
