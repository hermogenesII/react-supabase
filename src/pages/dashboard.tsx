// src/pages/Dashboard.tsx
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import LogoutButton from "../components/LogoutButton";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <LogoutButton />
        </div>

        <PostForm onPostCreated={() => window.location.reload()} />
        <PostList />
      </div>
    </div>
  );
};

export default Dashboard;
