import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApplicant } from "../store/applicantsSlice";

const AddApplicantForm = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs || []);
  const applicants = useSelector((state) => state.applicants);

  const [name, setName] = useState("");
  const [jobId, setJobId] = useState("");

  const exists = applicants.some(
    (a) =>
      a.name.toLowerCase() === name.toLowerCase() && a.jobId === Number(jobId)
  );

  if (exists) {
    alert("Applicant already exists for this job");
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !jobId) return;

    dispatch(
      addApplicant({
        name,
        jobId: Number(jobId),
      })
    );

    setName("");
    setJobId("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="font-semibold mb-3">Add Applicant</h2>

      <input
        type="text"
        placeholder="Applicant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />

      <select
        className="w-full border p-2 rounded mb-3"
        value={jobId}
        onChange={(e) => setJobId(e.target.value)}
      >
        <option value="">Select Job</option>
        {jobs.map((job) => (
          <option key={job.id} value={job.id}>
            {job.title}
          </option>
        ))}
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Applicant
      </button>
    </form>
  );
};

export default AddApplicantForm;
