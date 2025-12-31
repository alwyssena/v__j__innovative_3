import { useEffect, useState } from "react";
import axios from "axios";

const ModifyCourse = () => {
  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);

  const [courseName, setCourseName] = useState("");
  const [courseLogo, setCourseLogo] = useState(null);
  const [duration, setDuration] = useState("");
  const [fee, setFee] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("Beginner");

  // 🔹 Fetch courses
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/VJISS/course_details")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  // 🔹 Edit click
  const handleEdit = (course) => {
    setEditId(course.public_id);
    setCourseName(course.course_name);
    setDuration(course.course_duration);
    setFee(course.course_fee);
    setDescription(course.course_description);
    setLevel(course.course_level);
  };

  // 🔹 Update course
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("course_name", courseName);
    formData.append("course_duration", duration);
    formData.append("course_fee", fee);
    formData.append("course_description", description);
    formData.append("course_level", level);

    if (courseLogo) {
      formData.append("course_log", courseLogo);
    }

    axios
      .put(
        `http://127.0.0.1:8000/VJISS/modify_course/${editId}`,
        formData
      )
      .then(() => {
        alert("Course updated successfully");

        setCourses(
          courses.map((c) =>
            c.public_id === editId
              ? {
                  ...c,
                  course_name: courseName,
                  course_duration: duration,
                  course_fee: fee,
                  course_description: description,
                  course_level: level,
                }
              : c
          )
        );

        setEditId(null);
      })
      .catch((err) => {
        console.error(err);
        alert("Update failed");
      });
  };

  return (
    <div>
      <h2>Modify Courses</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Duration</th>
            <th>Fee</th>
            <th>Level</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.public_id}>
              <td>
                <img src={course.course_log} alt="" width="60" />
              </td>
              <td>{course.course_name}</td>
              <td>{course.course_duration}</td>
              <td>{course.course_fee}</td>
              <td>{course.course_level}</td>
              <td>{course.course_description}</td>
              <td>
                <button onClick={() => handleEdit(course)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editId && (
        <>
          <h3>Update Course</h3>

          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Course Name"
          />

          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration"
          />

          <input
            type="number"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            placeholder="Fee"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />

          <input
            type="file"
            onChange={(e) => setCourseLogo(e.target.files[0])}
          />

          <button onClick={handleUpdate}>Update</button>
        </>
      )}
    </div>
  );
};

export default ModifyCourse;
