import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const jobs = useSelector((state) => state.jobs);
  const applicants = useSelector((state) => state.applicants);

  const statusCount = (status) =>
    applicants.filter((a) => a.status === status).length;

  const recentApplicants = [...applicants].slice(-5).reverse();

  const topJobs = jobs
    .map((job) => ({
      ...job,
      count: applicants.filter((a) => a.jobId === job.id).length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT SECTION */}
      <div className="lg:col-span-2 space-y-6">
        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-bold">Hiring Overview</h1>
          <p className="text-gray-500">
            Monitor recruitment performance and activity
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Jobs" value={jobs.length} />
          <StatCard title="Applicants" value={applicants.length} />
          <StatCard title="Interviews" value={statusCount("Interview")} />
          <StatCard title="Offers" value={statusCount("Offer")} />
        </div>

        {/* Recent Applicants */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Recent Applicants</h2>

          {recentApplicants.length === 0 ? (
            <p className="text-gray-500">No recent activity</p>
          ) : (
            <ul className="divide-y">
              {recentApplicants.map((app) => (
                <li key={app.id} className="py-2 flex justify-between">
                  <span className="font-medium">{app.name}</span>
                  <span className="text-sm text-gray-500">{app.status}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Top Jobs */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Top Hiring Jobs</h2>

          {topJobs.map((job) => (
            <div
              key={job.id}
              className="flex justify-between py-2 border-b last:border-0"
            >
              <span>{job.title}</span>
              <span className="text-sm text-gray-500">
                {job.count} applicants
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="space-y-6">
        {/* Quick Actions */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Quick Actions</h2>

          <div className="flex flex-col gap-3">
            <Link
              to="/jobs"
              className="bg-blue-600 text-white text-center py-2 rounded"
            >
              + Add Job
            </Link>
            <Link to="/applicants" className="border text-center py-2 rounded">
              + Add Applicant
            </Link>
          </div>
        </div>

        {/* Pipeline Summary */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Hiring Pipeline</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Applied</span>
              <span>{statusCount("Applied")}</span>
            </div>
            <div className="flex justify-between">
              <span>Interview</span>
              <span>{statusCount("Interview")}</span>
            </div>
            <div className="flex justify-between">
              <span>Offer</span>
              <span>{statusCount("Offer")}</span>
            </div>
            <div className="flex justify-between">
              <span>Rejected</span>
              <span>{statusCount("Rejected")}</span>
            </div>
          </div>
        </div>

        {/* Insight Box */}
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h2 className="font-semibold mb-2 text-blue-700">Hiring Insight</h2>
          <p className="text-sm text-blue-600">
            Most candidates drop after interviews. Focus on faster feedback
            cycles to improve offers.
          </p>
        </div>
      </div>
    </div>
  );
}
