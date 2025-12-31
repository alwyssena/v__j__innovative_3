import { useState } from "react";
import axios from "axios";

export default function AddInternship() {
  const [formData, setFormData] = useState({
    internship_name: "",
    internship_description: "",
    technologies: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://127.0.0.1:8000/VJISS/add_internship_offers", formData);
      console.log("Submitting Internship Data:", formData);
      alert("Internship added successfully ✅");

      // Reset form
      setFormData({
        internship_name: "",
        internship_description: "",
        technologies: "",
      });
    } catch (error) {
      console.error(error.response?.data || error);
      alert(error.response?.data?.message || "Failed to add internship ❌");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Add Internship</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="internship_name" className="block mb-1 font-medium">
            Internship Name *
          </label>
          <input
            id="internship_name"
            type="text"
            name="internship_name"
            value={formData.internship_name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="internship_description" className="block mb-1 font-medium">
            Description *
          </label>
          <textarea
            id="internship_description"
            name="internship_description"
            value={formData.internship_description}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="technologies" className="block mb-1 font-medium">
            Technologies (comma separated) *
          </label>
          <input
            id="technologies"
            type="text"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            placeholder="e.g. React, Node.js, MongoDB"
            required
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Adding..." : "Add Internship"}
        </button>
      </form>
    </div>
  );
}
