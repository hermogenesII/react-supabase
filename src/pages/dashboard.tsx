// src/pages/Dashboard.tsx
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import LogoutButton from "../components/LogoutButton";
import UserSidebar from "../components/UserSidebar";
import { useUser } from "../hooks/useUser";

const Dashboard = () => {
  const user = useUser();
  return (
    <div className="min-h-screen bg-blue-100 flex p-4">
      <UserSidebar />
      <div className="flex-1 max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            {user && user.email && (
              <span className="text-gray-700 text-sm font-medium bg-gray-200 px-3 py-1 rounded-full">
                {user.email}
              </span>
            )}
            <div className="m-8 p-5 bg-red-500">Hi</div>
            <div className="bg-red-500 text-white p-10">Tailwind Test</div>
            <LogoutButton />
          </div>
        </div>

        <PostForm onPostCreated={() => window.location.reload()} />
        <PostList />
      </div>
    </div>
  );
};

export default Dashboard;
