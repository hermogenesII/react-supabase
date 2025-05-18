// src/components/AdminSidebar.tsx
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/admin-dashboard", label: "Dashboard" },
  { to: "/admin-users", label: "User Management" },
  // Add more admin links here as needed
];

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside className="h-full w-60 bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col py-8 px-4 shadow-2xl rounded-xl mr-8 border-r-4 border-blue-600">
      <h2 className="text-3xl font-extrabold mb-10 text-center tracking-wide">
        Admin
      </h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`py-3 px-5 rounded-lg text-lg transition-all duration-150 flex items-center gap-2 ${
              location.pathname === link.to
                ? "bg-blue-600 font-bold shadow-md"
                : "hover:bg-blue-800 hover:pl-7"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-10 flex justify-center">
        <Link
          to="/"
          className="bg-white text-blue-800 font-semibold px-4 py-2 rounded shadow hover:bg-blue-100 border border-blue-200 transition"
        >
          Go to Home
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
