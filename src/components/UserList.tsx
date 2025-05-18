// src/components/UserList.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../lib/queries/userQueries";

const UserList = () => {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading users...</div>;
  if (isError)
    return <div className="text-red-600">Error: {error.message}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-xs text-gray-500">
                {user.id}
              </td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                {user.user_metadata?.is_admin ? "Admin" : "User"}
              </td>
              <td className="py-2 px-4 border-b">
                {user.created_at
                  ? new Date(user.created_at).toLocaleString()
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
