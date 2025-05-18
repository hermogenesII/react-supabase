// src/components/PostForm.tsx
import { useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";
import { insertPost } from "../lib/queries/userQueries";

const PostForm = ({ onPostCreated }: { onPostCreated: () => void }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return alert("You must be logged in");

    try {
      await insertPost({ title, content, user_id: user.id });
      setTitle("");
      setContent("");
      onPostCreated();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border p-2 rounded"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Publish
      </button>
    </form>
  );
};

export default PostForm;
