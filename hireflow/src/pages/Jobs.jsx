import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import AddJobForm from "../components/AddJobForm";

export default function Jobs() {
  const jobs = useSelector((state) => state.jobs);

  return (
    <div className="p-6">
    <AddJobForm/>
      <div className="grid grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
