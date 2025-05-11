// src/components/LogoutButton.tsx
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase/supabaseClient";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
