import { blogs } from "../../data/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  content?: string;
}

interface BlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = blogs.find((b: Blog) => b.slug === params.slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((b: Blog) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full max-w-2xl mb-6 rounded-xl" />
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{blog.excerpt}</p>
      <div className="prose dark:prose-invert">
        {blog.content ? blog.content.split('\n').map((p, i) => <p key={i}>{p}</p>) : <p>Blog content coming soon...</p>}
      </div>
    </div>
  );
}
