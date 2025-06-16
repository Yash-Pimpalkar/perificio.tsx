"use client";

import { useEffect, useState } from "react";
import { TPost } from "@/app/types";
import CategoriesList from "./CategoriesList";
import Post from "./Posts";

const getPosts = async (): Promise<TPost[] | null> => {
  try {
    const res = await fetch("/api/posts", { cache: "no-store" });
    if (res.ok) return res.json();
  } catch (error) {
    console.error(error);
  }
  return null;
};

export default function DisplayBlogs() {
  const [posts, setPosts] = useState<TPost[] | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const visiblePosts = posts ? (showAll ? posts : posts.slice(0, 3)) : [];

  return (
    <>

  
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <CategoriesList />
      {visiblePosts.length > 0 ? (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post: TPost) => (
              <Post
                key={post.id}
                id={post.id}
                author={post.author.name}
                authorEmail={post.authorEmail}
                date={post.createdAt}
                thumbnail={post.imageUrl}
                category={post.catName}
                title={post.title}
                content={post.content}
                links={post.links || []}
              />
            ))}
          </div>
  
          {!showAll && posts && posts.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2 bg-[#1D4ED8] text-white font-semibold rounded-md hover:bg-[#2563EB] transition"
              >
                View More
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="py-6 text-center text-gray-600">No posts to display</div>
      )}
    </div>
  </>
  );
}
