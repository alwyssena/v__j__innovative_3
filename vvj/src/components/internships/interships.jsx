import { useEffect, useState, useRef } from "react";
import feather from "feather-icons";
import axios from "axios";

export default function Internship() {
  const [formData, setFormData] = useState({
    internship_offers_id: "", // <-- backend expects this field
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    education: "",
    resume: null,
  });
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    feather.replace();
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/VJISS/internship_offers_details")
      .then((response) => {
        setInternships(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching internship offers:", error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("internship_offers_id", formData.internship_offers_id); // fixed
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("email", formData.email);
    data.append("phone_number", formData.phone_number);
    data.append("education", formData.education);
    data.append("resume", formData.resume);

    try {
      await axios.post(
        "http://127.0.0.1:8000/VJISS/apply_internship",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Application submitted successfully ✅");

      // Reset form
      setFormData({
        internship_offers_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        education: "",
        resume: null,
      });

      if (fileInputRef.current) fileInputRef.current.value = null;
    } catch (error) {
      console.error(error.response?.data || error);
      alert(error.response?.data?.message || "Failed to submit ❌");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Internship Program</h1>
          <p className="text-xl text-blue-200">
            Launch your career with real-world internship experience
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Apply for Internship
          </h2>

          <form
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Internship Role */}
            <div>
              <label
                htmlFor="internship_offers_id"
                className="flex items-center mb-1 font-medium"
              >
                Internship Role <span className="text-red-500 ml-1">*</span>
              </label>

              <select
                id="internship_offers_id"
                name="internship_offers_id"
                value={formData.internship_offers_id}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              >
                <option value="">
                  {loading ? "Loading internships..." : "Select Internship Offer"}
                </option>
                {!loading &&
                  internships.map((internship) => (
                    <option
                      key={internship.internship_id}
                      value={internship.internship_id}
                    >
                      {internship.internship_name}
                    </option>
                  ))}
              </select>
            </div>

            {/* Names */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first_name" className="mb-1 font-medium block">
                  First Name *
                </label>
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="mb-1 font-medium block">
                  Last Name *
                </label>
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="mb-1 font-medium block">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="phone_number" className="mb-1 font-medium block">
                  Phone Number *
                </label>
                <input
                  id="phone_number"
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            {/* Education */}
            <div>
              <label htmlFor="education" className="mb-1 font-medium block">
                Education *
              </label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Education</option>
                <option value="Diploma">Diploma</option>
                <option value="UG">Under Graduate</option>
                <option value="PG">Post Graduate</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            {/* Resume */}
            <div>
              <label htmlFor="resume" className="mb-1 font-medium block">
                Resume *
              </label>
              <input
                id="resume"
                ref={fileInputRef}
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-secondary hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
