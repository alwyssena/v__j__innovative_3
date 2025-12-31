import React, { useEffect, useState } from "react";
import axios from "axios";

const JobNotifications = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/VJISS/job_notification_details"
      );
      setJobs(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://127.0.0.1:8000/VJISS/delete_job_notification/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // remove from UI
      setJobs(jobs.filter((job) => job.notification_id !== id));
      alert("Job deleted successfully");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete job");
    }
  };

  if (loading) return <p className="p-6">Loading jobs...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Job Notifications</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div
            key={job.notification_id}
            className="border rounded-lg p-4 shadow"
          >
            <h3 className="text-xl font-semibold">{job.job_title}</h3>
            <p className="text-gray-600">{job.company_name}</p>
            <p className="text-sm">{job.location}</p>

            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline block mt-2"
            >
              Apply Now
            </a>

            {/* DELETE BUTTON */}
            <button
              onClick={() => handleDelete(job.notification_id)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobNotifications;
