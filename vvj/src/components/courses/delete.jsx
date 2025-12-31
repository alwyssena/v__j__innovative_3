import { useEffect, useState } from "react";
import axios from "axios";

function DeleteCourse() {
  const [courses, setCourses] = useState([]);

  // 🔹 Fetch courses
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/VJISS/course_details")
      .then((response) => {
        setCourses(response.data);
        console.log("Fetched courses:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  // 🔹 Delete course
  const handleDelete = (course_id) => {

    console.log("Delete requested for course ID:", course_id);

     axios.delete(`http://127.0.0.1:8000/VJISS/delete_course/${course_id}`,
      { course_id },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        console.log("Deleted course ID:", course_id);
        alert("Course deleted successfully");

        setCourses(courses.filter((c) => c.public_id !== course_id));
      })
      .catch((error) => {
        console.error("Error deleting course:", error);
        alert("Failed to delete course");
      });
       
    
  };

  return (
    <div>
      <h2>Courses List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.public_id}>
              <td>{course.course_name}</td>
              <td>{course.duration}</td>
              <td>
                <button onClick={() => handleDelete(course.public_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteCourse;
