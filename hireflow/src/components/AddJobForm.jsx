import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../store/jobsSlice";

const AddJobForm = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !location) return;

    const exists = jobs.some(
      (job) => job.title.toLowerCase() === title.toLowerCase()
    );

    if (exists) {
      alert("Job already exists");
      return;
    }

    dispatch(
      addJob({
        id: Date.now(),
        title,
        location,
      })
    );

    setTitle("");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="font-semibold text-lg mb-3">Add New Job</h2>

      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      <input
        type="text"
        placeholder="Location (Remote / City)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Job
      </button>
    </form>
  );
};

export default AddJobForm;
