// src/hooks/useUser.ts
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";

export const useUser = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get the current user on mount
    supabase.auth.getUser().then((res) => setUser(res.data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return user;
};
