import { useSelector } from "react-redux";

export default function ApplicantCard({ applicant, onMove }) {
  const jobs = useSelector((state) => state.jobs);
  const job = jobs.find((j) => j.id === applicant.jobId);

  return (
    <div className="bg-white p-3 mb-2 rounded shadow">
      <p className="font-medium">{applicant.name}</p>
      <p className="text-sm text-gray-500">{job ? job.title : "Unknown Job"}</p>

      <select
        className="mt-2 w-full border rounded"
        value={applicant.status}
        onChange={(e) => onMove(e.target.value)}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
    </div>
  );
}
