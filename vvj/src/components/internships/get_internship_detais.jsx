import { useEffect, useState } from "react";
import axios from "axios";

export default function GetInternshipDetails() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/VJISS/internship_offers_details")
      .then((response) => {
        setInternships(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching internship details:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading internship details...</p>;
  }

  if (internships.length === 0) {
    return <p className="text-center mt-10">No internships found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Internship Offers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left border-b">ID</th>
              <th className="py-3 px-6 text-left border-b">Name</th>
              <th className="py-3 px-6 text-left border-b">Description</th>
              <th className="py-3 px-6 text-left border-b">Technologies</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((internship) => (
              <tr key={internship.internship_id} className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">{internship.internship_id}</td>
                <td className="py-3 px-6 border-b">{internship.internship_name}</td>
                <td className="py-3 px-6 border-b">{internship.internship_description}</td>
                <td className="py-3 px-6 border-b">{internship.technologies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
