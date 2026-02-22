import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { remark } from "remark";
import remarkHtml from "remark-html";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://ellaboratetechnologies.com/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const processedContent = await remark().use(remarkHtml).process(post.content);
  const contentHtml = processedContent.toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Ellaborate Technologies", url: "https://ellaboratetechnologies.com" },
    url: `https://ellaboratetechnologies.com/blog/${params.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <section className="bg-brand-dark text-white pt-36 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
            {post.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-gray prose-lg max-w-none prose-headings:font-bold prose-headings:text-brand-dark prose-a:text-brand-blue prose-code:text-brand-blue prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded prose-pre:bg-brand-dark prose-pre:text-gray-200 prose-table:border prose-th:bg-gray-50 prose-td:border prose-td:border-gray-200 prose-th:border prose-th:border-gray-200"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            <div className="mt-16 p-8 rounded-2xl bg-cta-gradient text-white text-center">
              <h3 className="font-bold text-xl mb-3">Have a project in mind?</h3>
              <p className="text-blue-100 text-sm mb-6">Our engineering team is ready to review your requirements.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-brand-navy font-bold text-sm hover:bg-gray-100 transition-all"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
