import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-500";

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <NavLink to="/">
        <h1 className="text-xl font-bold text-blue-600">HireFlow</h1>
      </NavLink>

      <div className="flex gap-6">
        <NavLink to="/" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/jobs" className={linkClass}>
          Jobs
        </NavLink>
        <NavLink to="/applicants" className={linkClass}>
          Applicants
        </NavLink>
      </div>
    </nav>
  );
}
