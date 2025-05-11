import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase/supabaseClient";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        navigate("/dashboard");
      } else {
        setLoading(false);
      }
    };
    checkUser();
  }, [navigate]);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">📝 Welcome to My Blog App</h1>
        <p className="text-gray-600 mb-6">
          A simple blogging platform built with React, TypeScript, Tailwind, and
          Supabase.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
