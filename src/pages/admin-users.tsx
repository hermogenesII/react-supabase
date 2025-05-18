// src/pages/admin-users.tsx
import LogoutButton from "../components/LogoutButton";
import { useUser } from "../hooks/useUser";
import AdminSidebar from "../components/AdminSidebar";
import { Link } from "react-router-dom";
import UserList from "../components/UserList";

const AdminUsers = () => {
  const user = useUser();
  const isAdmin = user?.user_metadata?.is_admin;

  if (user === undefined) return <div>Loading...</div>;
  if (!isAdmin)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-red-200 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Access Denied
          </h2>
          <p className="text-gray-700 mb-6">
            You do not have permission to view this page.
          </p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold shadow"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex p-4">
      <AdminSidebar />
      <div className="flex-1 max-w-3xl mx-auto space-y-6 border rounded-lg shadow-lg bg-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Management</h1>
          <LogoutButton />
        </div>
        <div className="mt-8 text-gray-700">
          User management features go here.
        </div>
        <UserList />
      </div>
    </div>
  );
};

export default AdminUsers;
