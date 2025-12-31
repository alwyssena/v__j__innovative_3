import { useEffect, useState } from "react";
import axios from "axios";

export default function ModifyInternships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null); // ID of internship being edited
  const [editData, setEditData] = useState({
    internship_name: "",
    internship_description: "",
    technologies: "",
  });

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = () => {
    axios
      .get("http://127.0.0.1:8000/VJISS/internship_offers_details")
      .then((res) => {
        setInternships(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleEditClick = (internship) => {
    setEditingId(internship.internship_id);
    setEditData({
      internship_name: internship.internship_name,
      internship_description: internship.internship_description,
      technologies: internship.technologies,
    });
  };

  const handleChange = (e) => {
    setEditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = (id) => {
    axios
      .put(`http://127.0.0.1:8000/VJISS/modify_internship_offers/${id}`, editData)
      .then(() => {
        alert("Internship modified successfully ✅");
        setEditingId(null);
        fetchInternships();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to modify internship ❌");
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/VJISS/delete_internship_offers/${id}`)
      .then(() => {
        alert("Internship deleted successfully ✅");
        setInternships((prev) => prev.filter((item) => item.internship_id !== id));
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to delete internship ❌");
      });
  };

  if (loading) return <p className="text-center mt-10">Loading internships...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Modify Internships</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 border-b">ID</th>
              <th className="py-3 px-6 border-b">Name</th>
              <th className="py-3 px-6 border-b">Description</th>
              <th className="py-3 px-6 border-b">Technologies</th>
              <th className="py-3 px-6 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((internship) => (
              <tr key={internship.internship_id} className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">{internship.internship_id}</td>

                {/* If this internship is being edited, show input fields */}
                {editingId === internship.internship_id ? (
                  <>
                    <td className="py-3 px-6 border-b">
                      <input
                        type="text"
                        name="internship_name"
                        value={editData.internship_name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="py-3 px-6 border-b">
                      <textarea
                        name="internship_description"
                        value={editData.internship_description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="py-3 px-6 border-b">
                      <input
                        type="text"
                        name="technologies"
                        value={editData.technologies}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="py-3 px-6 border-b space-x-2">
                      <button
                        onClick={() => handleSave(internship.internship_id)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-3 px-6 border-b">{internship.internship_name}</td>
                    <td className="py-3 px-6 border-b">{internship.internship_description}</td>
                    <td className="py-3 px-6 border-b">{internship.technologies}</td>
                    <td className="py-3 px-6 border-b space-x-2">
                      <button
                        onClick={() => handleEditClick(internship)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Modify
                      </button>
                      <button
                        onClick={() => handleDelete(internship.internship_id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
