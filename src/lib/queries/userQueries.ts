// src/lib/queries/userQueries.ts
import { supabase } from "../supabase/supabaseClient";
import { fetchPostsByUser } from "./postQueries";

export async function insertUserToTable({
  id,
  email,
}: {
  id: string;
  email: string;
}) {
  const { error } = await supabase.from("users").insert({ id, email });
  if (error) throw new Error(error.message);
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

export async function fetchUsers() {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data;
}

export async function getUserWithPosts(user_id: string) {
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", user_id)
    .single();
  if (error) throw new Error(error.message);
  const posts = await fetchPostsByUser(user_id);
  return { user, posts };
}
