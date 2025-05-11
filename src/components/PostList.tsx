// src/components/PostList.tsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";

export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="space-y-4 mt-6">
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-white shadow rounded">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p className="text-gray-700">{post.content}</p>
          <p className="text-xs text-gray-500">
            {new Date(post.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
