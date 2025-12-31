import { useEffect, useState } from "react";
import axios from "axios";

function ModifySyllabus() {
  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);
  const [moduleName, setModuleName] = useState("");
  const [description, setDescription] = useState("");
  const [courseId, setCourseId] = useState(null);

  // 🔹 Fetch courses with syllabus
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/VJISS/course_details")
      .then((res) => {
        setCourses(res.data);
        if (res.data.length > 0) {
          setCourseId(res.data[0].public_id);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // ✏️ Edit syllabus
  const handleEdit = (syllabus) => {
    setEditId(syllabus.public_id);
    setModuleName(syllabus.module);
    setDescription(syllabus.description);
  };

  // 🔄 Update syllabus
  const handleUpdate = () => {
    axios
      .put(`http://127.0.0.1:8000/VJISS/modify_syllabus/${editId}`, {
        module: moduleName,
        description: description,
        course_name: courseId,
      })
      .then(() => {
        alert("Syllabus updated successfully");

        setCourses((prevCourses) =>
          prevCourses.map((course) => ({
            ...course,
            syllabus_courses: course.syllabus_courses.map((s) =>
              s.public_id === editId
                ? { ...s, module: moduleName, description }
                : s
            ),
          }))
        );

        setEditId(null);
        setModuleName("");
        setDescription("");
      })
      .catch(() => alert("Failed to update syllabus"));
  };

  // 🗑 DELETE syllabus
  const handleDelete = (syllabusId) => {
    if (!window.confirm("Are you sure you want to delete this syllabus?")) return;

    axios
      .delete(`http://127.0.0.1:8000/VJISS/delete_syllabus/${syllabusId}`)
      .then(() => {
        alert("Syllabus deleted successfully");

        setCourses((prevCourses) =>
          prevCourses.map((course) => ({
            ...course,
            syllabus_courses: course.syllabus_courses.filter(
              (s) => s.public_id !== syllabusId
            ),
          }))
        );
      })
      .catch(() => alert("Failed to delete syllabus"));
  };

  return (
    <div>
      <h2>Modify Syllabus</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Module</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) =>
            course.syllabus_courses.map((syllabus) => (
              <tr key={syllabus.public_id}>
                <td>{course.course_name}</td>
                <td>{syllabus.module}</td>
                <td>{syllabus.description}</td>
                <td>
                  <button onClick={() => handleEdit(syllabus)}>Edit</button>
                  <button
                    style={{ marginLeft: "8px", color: "red" }}
                    onClick={() => handleDelete(syllabus.public_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {editId && (
        <>
          <h3>Edit Syllabus</h3>

          <input
            type="text"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
            placeholder="Module Name"
          />

          <br /><br />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />

          <br /><br />

          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setEditId(null)}>Cancel</button>
        </>
      )}
    </div>
  );
}

export default ModifySyllabus;
