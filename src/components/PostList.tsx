// src/components/PostList.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../lib/queries/postQueries";
import type { Post } from "../types/Post";
import PostCard from "./PostCard";

const PostList = () => {
  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-4 mt-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
