// src/components/PostCard.tsx
import type { Post } from "../types/Post";

const PostCard = ({ post }: { post: Post }) => (
  <div className="p-6 bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-xl border border-blue-100 hover:shadow-xl transition-shadow duration-200">
    <h3
      className="font-bold text-2xl text-blue-800 mb-2 truncate"
      title={post.title}
    >
      {post.title}
    </h3>
    <p className="text-gray-700 mb-4 whitespace-pre-line min-h-[48px]">
      {post.content}
    </p>
    <div className="flex items-center justify-between mt-2">
      <span className="text-xs text-gray-400 italic">
        {new Date(post.created_at).toLocaleString()}
      </span>
      <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold">
        User: {post.user_id.slice(0, 6)}...
      </span>
    </div>
  </div>
);

export default PostCard;
