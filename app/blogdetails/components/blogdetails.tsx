"use client"
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  CalendarIcon,
  CheckSquareIcon,
  ClockIcon,
  UserIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { blogData, BlogPost } from "@/app/lib/appdata";

// These will now be dynamically loaded from blog data

export const DesignPrinciplesSection = ({ blogPost }: { blogPost: BlogPost }) => {
  const metadataItems = [
    {
      icon: UserIcon,
      text: blogPost.author.toUpperCase(),
    },
    {
      icon: CalendarIcon,
      text: blogPost.date,
    },
    {
      icon: ClockIcon,
      text: blogPost.readTime,
    },
  ];

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden mx-auto">
      <section className="w-full py-[100px] bg-white">
        {/* Content Container with max-width */}
        <div className="w-full max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="relative w-full h-[645px] rounded-lg overflow-hidden">
                <Image
                  src={blogPost.imageSrc}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                />
                {blogPost.category && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-[#2970ff] text-white text-sm font-normal px-3 py-1 rounded">
                      {blogPost.category}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-start gap-6">
                {metadataItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <IconComponent className="w-[18px] h-[18px] text-gray-500" />
                      <div className="text-gray-500 text-base font-normal">
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <h1 className="font-black text-neutral-900 text-5xl tracking-[0] leading-[57.6px]">
                    {blogPost.title}
                  </h1>

                  <p className="font-normal text-[#777980] text-lg tracking-[0] leading-[28.8px]">
                    {blogPost.mainContent?.intro || blogPost.content || blogPost.description}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h2 className="font-semibold text-neutral-900 text-3xl tracking-[0] leading-[38.4px]">
                      {blogPost.mainContent?.section1Title || "Core Principles"}
                    </h2>

                    <p className="font-normal text-[#777980] text-lg tracking-[0] leading-[28.8px]">
                      {blogPost.mainContent?.section1Content || "Content coming soon..."}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full">
                    <h3 className="font-medium text-neutral-900 text-xl tracking-[0] leading-[28px]">
                      Key Strategies for Success
                    </h3>
                    
                    <div className="flex items-start gap-12 w-full">
                      <div className="flex flex-col items-start gap-3">
                        {(blogPost.mainContent?.leftColumnItems || []).map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckSquareIcon className="w-5 h-5 text-blue-600" />
                            <div className="font-medium text-gray-700 text-lg leading-[28px]">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col items-start gap-3">
                        {(blogPost.mainContent?.rightColumnItems || []).map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckSquareIcon className="w-5 h-5 text-blue-600" />
                            <div className="font-medium text-gray-700 text-lg leading-[28px]">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="font-semibold text-neutral-900 text-3xl tracking-[0] leading-[38.4px]">
                  {blogPost.mainContent?.section2Title || "From Data to Decisions: Why Design Matters"}
                </h2>

                <p className="font-normal text-[#777980] text-lg tracking-[0] leading-[28.8px]">
                  {blogPost.mainContent?.section2Content || "Designing a KPI dashboard isn't just about visuals—it's about making data usable. A well-designed dashboard helps leaders move faster by highlighting trends, spotting red flags early, and celebrating wins. When metrics are aligned, readable, and actionable, your dashboard becomes a strategic partner—not just another screen full of numbers."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const BlogPostSection = ({ currentBlogId }: { currentBlogId: number }) => {
  const router = useRouter();
  // Get related blogs (excluding current blog)
  const relatedBlogs = blogData.filter(blog => blog.id !== currentBlogId).slice(0, 3);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden mx-auto">
      <section className="w-full pt-12 pb-[100px] bg-gray-50">
        {/* Content Container with max-width */}
        <div className="w-full max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col w-full items-start gap-12">
            <header className="flex items-start justify-between w-full">
              <h2 className="font-black text-neutral-900 text-5xl tracking-[0] leading-[57.6px]">
                Related Blogs
              </h2>
              <p className="w-[554px] font-normal text-[#777980] text-lg tracking-[0] leading-[28.8px]">
                Explore our curated selection of articles designed to deepen your
                understanding and broaden your perspective. Our related blogs offer
                valuable insights to support your journey.
              </p>
            </header>

            <div className="grid grid-cols-3 gap-8 w-full">
              {relatedBlogs.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col gap-3 bg-transparent transition-all duration-300 cursor-pointer group"
                  onClick={() => router.push(`/blogdetails?id=${post.id}`)}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="relative w-full h-[274px] rounded-lg overflow-hidden">
                        <Image
                          src={post.imageSrc}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.category && (
                          <div className="absolute top-3 right-3">
                            <div className="bg-[#2970ff] text-white text-sm font-normal px-3 py-1 rounded">
                              {post.category}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <UserIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 text-sm">
                            {post.author}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 text-sm">
                            {post.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 text-sm">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-gray-900 text-lg font-medium leading-tight">
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-1 p-0 rounded-none hover:bg-transparent h-auto mt-2 cursor-pointer transition-all duration-200 hover:gap-2">
                      <span className="font-semibold text-[#2970ff] text-lg">
                        Continue reading
                      </span>
                      <ArrowUpRightIcon className="w-6 h-6 text-[#2970ff]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function BlogDetails() {
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id');
  
  // Find the blog post by ID, default to first blog if not found
  const blogPost = blogData.find(blog => blog.id === Number(blogId)) || blogData[0];
  
  if (!blogPost) {
    return (
      <div className="w-full flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Blog not found</h1>
          <p className="text-gray-600">The requested blog post could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <DesignPrinciplesSection blogPost={blogPost} />
      <BlogPostSection currentBlogId={blogPost.id} />
    </div>
  );
}
