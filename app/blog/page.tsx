import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Blog | Engineering Insights by Ellaborate Technologies",
  description:
    "Technical articles, engineering guides, and industry insights on AI, IoT, autonomous systems, and enterprise software from the Ellaborate Technologies team.",
  alternates: { canonical: "https://ellaboratetechnologies.com/blog" },
};

const tagColors: Record<string, string> = {
  "AI / ML": "bg-blue-50 text-blue-700",
  "IoT": "bg-emerald-50 text-emerald-700",
  "Autonomous Systems": "bg-violet-50 text-violet-700",
  "ERP": "bg-amber-50 text-amber-700",
  "Software Engineering": "bg-sky-50 text-sky-700",
  "Engineering": "bg-gray-100 text-gray-700",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white pt-36 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <FadeUp>
            <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-4 block">Engineering Blog</span>
            <h1 className="heading-xl mb-6">
              Technical <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Deep-dive articles from our engineering team on AI, IoT, autonomous systems, and enterprise software.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <FadeUp className="text-center py-20">
              <p className="text-gray-400">No posts yet. Check back soon!</p>
            </FadeUp>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <article className="card-base card-hover p-7 h-full flex flex-col group">
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tagColors[post.tag] || tagColors["Engineering"]}`}>
                          {post.tag}
                        </span>
                      </div>
                      <h2 className="font-bold text-brand-dark text-lg mb-3 leading-tight group-hover:text-brand-blue transition-colors flex-1">
                        {post.title}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5">{post.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400 mt-auto pt-5 border-t border-gray-100">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:gap-2 transition-all">
                        Read Article <ArrowRight size={14} />
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </>
  );
}
