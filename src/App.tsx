// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
