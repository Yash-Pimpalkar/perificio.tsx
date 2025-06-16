// app/posts/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";
import { TPost } from "@/app/types";
import DeleteButton from "@/components/Blogs/DeleteButton";

// Fetch post data by ID from API
const getPost = async (id: string): Promise<TPost | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const post = await res.json();
      return post;
    }
  } catch (error) {
    console.error(error);
  }

  return null;
};

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const session = await getServerSession(authOptions);
  const post = await getPost(params.id);

  if (!post) return notFound();

  const isEditable = session?.user?.email === post.authorEmail;



  return (
    <section className="py-12 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Author Info */}
        <p className="text-sm text-gray-600 mb-2">
        <span className="font-semibold">{post.catName}</span>

        </p>

        {/* Thumbnail */}
        {post.imageUrl && (
          <div className="relative w-full h-64 mb-6">
            <Image
              src={post.imageUrl ||  "/default-thumbnail.jpg"}
              alt={post.title}
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-montserrat font-extrabold text-[#1D4ED8] mb-6">
          {post.title}
        </h1>

        {/* Content */}
        <div className="prose max-w-none mb-6">
          <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>

        {/* Links */}
        {post.links && post.links.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-[#1D4ED8]">Related Links:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-600">
              {post.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline break-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer: Actions */}
       

          <Link
            href="/"
            className="ml-auto bg-[#1D4ED8] hover:bg-[#3B82F6] text-white px-4 py-2 rounded-md font-semibold text-sm"
          >
            ← Back to Home
          </Link>
        </div>
    
    </section>
  );
}
