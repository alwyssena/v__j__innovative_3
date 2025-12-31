import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editRowId, setEditRowId] = useState(null);
  const [formData, setFormData] = useState({
    reason: "",
    status: "",
  });

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        setLoading(false);
        return;
      }

      const res = await axios.get(
        "http://127.0.0.1:8000/VJISS/view_applications",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setApplications(res.data);
    } catch (err) {
      console.error("Error fetching applications:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (app) => {
    setEditRowId(app.application_id);
    setFormData({
      reason: app.reason || "",
      status: app.status || "Pending",
    });
  };

  const handleSave = async (app) => {
    try {
      const token = localStorage.getItem("token");
      const payload = new FormData();
      payload.append("first_name", app.first_name);
      payload.append("last_name", app.last_name);
      payload.append("email", app.email);
      payload.append("phone_number", app.phone_number);
      payload.append("education", app.education);
      payload.append(
        "internship_offers_id",
        app.internship_offers?.internship_id || ""
      );
      payload.append("reason", formData.reason);
      payload.append("status", formData.status);

      const res = await axios.patch(
        `http://127.0.0.1:8000/VJISS/modify_application/${app.application_id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Application updated successfully ✅");
      setEditRowId(null);
      fetchApplications();
    } catch (error) {
      console.error("Update failed:", error.response?.data || error);
      alert("Failed to update application ❌");
    }
  };

  // New: Delete handler
  const handleDelete = async (appId) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://127.0.0.1:8000/VJISS/delete_application/${appId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Application deleted successfully ✅");
      fetchApplications();
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error);
      alert("Failed to delete application ❌");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Applications</h2>

      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Internship</th>
                <th className="border p-2">Reason</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Applied On</th>
                <th className="border p-2">Resume</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.application_id} className="hover:bg-gray-50">
                  <td className="border p-2">{app.application_id}</td>
                  <td className="border p-2">
                    {app.first_name} {app.last_name}
                  </td>
                  <td className="border p-2">
                    {app.internship_offers?.internship_name || "—"}
                  </td>

                  {/* Reason */}
                  <td className="border p-2">
                    {editRowId === app.application_id ? (
                      <textarea
                        className="w-full border rounded p-1"
                        value={formData.reason}
                        onChange={(e) =>
                          setFormData({ ...formData, reason: e.target.value })
                        }
                      />
                    ) : (
                      app.reason || "—"
                    )}
                  </td>

                  {/* Status */}
                  <td className="border p-2">
                    {editRowId === app.application_id ? (
                      <select
                        className="border rounded p-1"
                        value={formData.status}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.value })
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    ) : (
                      <span
                        className={`font-semibold ${
                          app.status === "Accepted"
                            ? "text-green-600"
                            : app.status === "Rejected"
                            ? "text-red-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {app.status || "Pending"}
                      </span>
                    )}
                  </td>

                  <td className="border p-2">
                    {new Date(app.applied_on).toLocaleDateString()}
                  </td>

                  <td className="border p-2">
                    <a
                      href={app.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Resume
                    </a>
                  </td>

                  {/* Actions */}
                  <td className="border p-2 space-x-2">
                    {editRowId === app.application_id ? (
                      <button
                        onClick={() => handleSave(app)}
                        className="px-3 py-1 bg-green-600 text-white rounded"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(app)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded"
                      >
                        Edit
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(app.application_id)}
                      className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewApplications;
