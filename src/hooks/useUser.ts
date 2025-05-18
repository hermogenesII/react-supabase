// src/hooks/useUser.ts
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";
import type { User } from "@supabase/supabase-js";

export const useUser = () => {
  const [user, setUser] = useState<User | undefined | null>(undefined);

  useEffect(() => {
    // Get the current user on mount
    supabase.auth.getUser().then((res) => setUser(res.data.user ?? null));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return user;
};
