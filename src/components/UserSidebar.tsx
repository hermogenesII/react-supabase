import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  // Add more user links here as needed
];

const UserSidebar = () => {
  const location = useLocation();
  return (
    <aside className="h-full w-72 bg-gradient-to-b from-indigo-900 to-indigo-700 text-white flex flex-col py-12 px-8 shadow-2xl rounded-3xl mr-12 border-r-8 border-indigo-800 ring-2 ring-indigo-400/20">
      <div className="flex flex-col items-center mb-14">
        <div className="bg-indigo-700 rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-xl border-4 border-indigo-400 animate-pulse">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-lg">
          User Panel
        </h2>
        <span className="text-indigo-200 text-sm mt-1">Welcome back!</span>
      </div>
      <nav className="flex flex-col gap-5 mb-10">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`py-3 px-8 rounded-xl text-lg transition-all duration-200 flex items-center gap-3 shadow-sm border-l-4 ${
              location.pathname === link.to
                ? "bg-indigo-600 font-bold shadow-lg border-blue-400 scale-105"
                : "hover:bg-indigo-800 hover:pl-12 border-transparent"
            }`}
          >
            <span className="inline-block w-2 h-2 rounded-full mr-2 bg-blue-400" />
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-16 flex justify-center">
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:from-indigo-500 hover:to-blue-500 border-2 border-white/20 transition-all duration-200"
        >
          Go to Home
        </Link>
      </div>
    </aside>
  );
};

export default UserSidebar;
