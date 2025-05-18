// src/lib/queries/postQueries.ts
import { supabase } from "../supabase/supabaseClient";

export async function fetchPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data;
}

export async function insertPost({
  title,
  content,
  user_id,
}: {
  title: string;
  content: string;
  user_id: string;
}) {
  const { error } = await supabase
    .from("posts")
    .insert({ title, content, user_id });
  if (error) throw new Error(error.message);
}

export async function fetchPostsByUser(user_id: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data;
}
