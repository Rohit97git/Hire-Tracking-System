export default function JobCard({ job }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h2 className="font-semibold text-lg">{job.title}</h2>
      <p className="text-gray-500">{job.location}</p>
    </div>
  );
}
