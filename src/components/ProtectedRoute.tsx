import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const ProtectedRoute = ({ children }: { children: React.JSX.Element }) => {
  const user = useUser();
  console.log("user: ", user);

  if (user === undefined) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
