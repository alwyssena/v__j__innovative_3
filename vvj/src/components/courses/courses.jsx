// import React from "react";

// export default function Courses() {
//   return (
//     <section
//   className="bg-gradient-to-br from-primary to-blue-800 text-white py-20"
//   style={{ transform: "translateY(0px)" }}
// >
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h1 className="text-5xl font-bold mb-6 fade-in animate-fade-in">
//       Our Courses
//     </h1>

//     <p className="text-xl text-blue-200 max-w-3xl mx-auto fade-in animate-fade-in">
//       Comprehensive programming courses designed to build real-world skills
//       and launch your tech career
//     </p>
//   </div>
// </section>

//   );
// }





import React, { useEffect ,useState} from "react";
import feather from "feather-icons";
import Navbar from "../navbar";
import axios from "axios";  
import CourseWithSyllabusForm from "./create_courses";

export default function CoursesPage() {
  useEffect(() => {
    feather.replace();
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/VJISS/course_details')
      .then(response => {
        console.log('Page visit logged:', response.data);
      })
      .catch(error => {
        console.error('Error logging page visit:', error);
      });
    
  }, []);

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/assets/icons/logo.svg" alt="VJ Innovate Logo" className="h-10 w-10 mr-3" />
              <span className="text-xl font-bold text-primary">VJ Innovate</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="nav-link text-gray-700 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/services" className="nav-link text-gray-700 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="/courses" className="nav-link text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                <a href="/internship" className="nav-link text-gray-700 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Internship</a>
                <a href="/contact" className="nav-link text-gray-700 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Our Courses</h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Comprehensive programming courses designed to build real-world skills and launch your tech career
        </p>
      </section>
<CourseCard />
<CourseWithSyllabusForm />
      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Python Course */}
          <Course
            title="Python Programming"
            duration="3 Months"
            level="Beginner to Intermediate"
            icon="/assets/icons/python.svg"
            overview="Master Python programming from fundamentals to advanced concepts including OOP, data structures, and libraries."
            learn={["Python Syntax and Fundamentals", "Data Structures", "OOP Concepts", "File Handling", "NumPy & Pandas"]}
          />

          {/* Django Course */}
          <Course
            title="Python + Django + DRF"
            duration="6 Months"
            level="Intermediate to Advanced"
            icon="/assets/icons/python.svg"
            overview="Full‑stack web development using Django and Django REST Framework."
            learn={["Advanced Python", "Django Framework", "Django ORM", "REST APIs", "Authentication"]}
          />

          {/* Java Course */}
          <Course
            title="Java Programming"
            duration="4 Months"
            level="Beginner to Intermediate"
            icon="/assets/icons/java.svg"
            overview="Learn Java from basics to enterprise‑level application development."
            learn={["Java Fundamentals", "OOP", "Collections", "Exception Handling", "Multithreading"]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
        <p className="text-xl mb-8 text-blue-200">Join thousands of students who transformed their careers.</p>
        <div className="space-x-4">
          <a href="/contact" className="bg-secondary hover:bg-orange-600 transition-colors px-8 py-3 rounded-lg text-lg font-semibold">Enroll Today</a>
          <a href="/internship" className="border-2 border-white hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded-lg text-lg font-semibold">Apply for Internship</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2025 VJ Innovate Software Solutions Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Course({ title, duration, level, icon, overview, learn }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl mb-12">
      <div className="flex items-center mb-6">
        <img src={icon} alt={title} className="h-16 w-16 mr-6" />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600">Duration: {duration} | Level: {level}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{overview}</p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        {learn.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <a href="/contact" className="block text-center bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold w-full transition-colors">Enroll Now</a>
    </div>
  );
}



function CourseCard() {
  
const [courses, setCourses] = useState([]);

useEffect(() => {
  axios
    .get("http://127.0.0.1:8000/VJISS/course_details")
    .then((response) => {
      console.log("Course data:", response.data);
      setCourses(response.data);   // store API data
    })
    .catch((error) => {
      console.error("Error fetching course data:", error);
    });
}, []);

 return (
  <div>
    {courses.map((course) => (
      <div key={course.public_id} className="course-card">
        <img
          src={course.course_log}
          alt={course.course_name}
          width="120"
        />

        <h2>{course.course_name}</h2>
        <p>{course.course_description}</p>

        <p><strong>Duration:</strong> {course.course_duration}</p>
        <p><strong>Level:</strong> {course.course_level}</p>
        <p><strong>Fee:</strong> ₹{course.course_fee}</p>

        {/* Syllabus */}

<div className="syllabus-section">
        <h3>Syllabus</h3>

        {course.syllabus_courses.map((item, index) => (
          <div className="syllabus-card" key={item.public_id}>
            <h4>
              Module {index + 1}: {item.module}
            </h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>


        
      </div>
    ))}
  </div>
);

}

