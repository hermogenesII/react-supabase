// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home";
import AdminDashboard from "./pages/admin-dashboard";
import AdminUsers from "./pages/admin-users";
import { useUser } from "./hooks/useUser";
import { useMemo } from "react";

function App() {
  const user = useUser();
  const isAdmin = useMemo(() => user?.user_metadata?.is_admin, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* User routes */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute children={<Dashboard />} />}
        />
        {/* Admin routes */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              {isAdmin ? <AdminDashboard /> : <div>Access denied.</div>}
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <ProtectedRoute>
              {isAdmin ? <AdminUsers /> : <div>Access denied.</div>}
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
