import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabase/supabaseClient";

const ProtectedRoute = ({ children }: { children: React.JSX.Element }) => {
  const [user, setUser] = useState<any>(undefined);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  if (user === undefined) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
