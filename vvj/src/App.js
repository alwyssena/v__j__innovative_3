import { BrowserRouter, Routes, Route,  } from "react-router-dom";
//import ProtectedRoute from "./components/protection/protectedRoute";
import Login from "./components/login/login";
import  Registration from "./components/register/register";
import Homepage from "./components/homepage/homepage";
import Courses from "./components/courses/courses";
import ContactPage from "./components/contact/contact";
import Internship from "./components/internships/interships";
import DeleteCourse from "./components/courses/delete";
import ModifyCourse from "./components/courses/modify_course";
import ModifySyllabus from "./components/courses/modify_syllabus";
import AddInternships from "./components/internships/add_interships";
import GetInternshipDetails from "./components/internships/get_internship_detais";
import ModifyInternships from "./components/internships/modify_interships";
import ViewApplication from "./components/internships/view_application";
import  JobNotifications from "./components/jobs/job_notifications";
import "./index.css";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Registration />} />
    <Route path="/" element={<Homepage />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/internship" element={<Internship />} />
    <Route path="/delete" element={<DeleteCourse />} />
    <Route path="/modify" element={<ModifyCourse />} />
    <Route path="/bus" element={<ModifySyllabus />} />
    <Route path="/addinternship" element={<AddInternships />} />
    <Route path="/get" element={<GetInternshipDetails />} />
    <Route path="/mo" element={<ModifyInternships />} />
    <Route path="/vi" element={<ViewApplication />} />
    <Route path="/jn" element={<JobNotifications />} />
    

    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
