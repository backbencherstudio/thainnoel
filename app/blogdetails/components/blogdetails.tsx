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
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[100px] bg-white">
        {/* Content Container with max-width */}
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
            <div className="flex flex-col items-start gap-2 sm:gap-3 w-full">
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[645px] rounded-lg overflow-hidden">
                <Image
                  src={blogPost.imageSrc}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                />
                {blogPost.category && (
                  <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6">
                    <div className="bg-[#2970ff] text-white text-xs sm:text-sm font-normal px-2 sm:px-3 py-1 rounded">
                      {blogPost.category}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2 sm:gap-4 md:gap-6">
                {metadataItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-1 sm:gap-2">
                      <IconComponent className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-500" />
                      <div className="text-gray-500 text-sm sm:text-base font-normal">
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 w-full">
              <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-6 w-full">
                <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 w-full">
                  <h1 className="font-black text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight sm:leading-[38.4px] md:leading-[48px] lg:leading-[57.6px]">
                    {blogPost.title}
                  </h1>

                  <p className="font-normal text-[#777980] text-base sm:text-lg tracking-[0] leading-relaxed sm:leading-[28.8px]">
                    {blogPost.mainContent?.intro || blogPost.content || blogPost.description}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 w-full">
                    <h2 className="font-semibold text-neutral-900 text-xl sm:text-2xl md:text-3xl tracking-[0] leading-tight sm:leading-[28px] md:leading-[32px] lg:leading-[38.4px]">
                      {blogPost.mainContent?.section1Title || "Core Principles"}
                    </h2>

                    <p className="font-normal text-[#777980] text-base sm:text-lg tracking-[0] leading-relaxed sm:leading-[28.8px]">
                      {blogPost.mainContent?.section1Content || "Content coming soon..."}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 w-full">
                    <h3 className="font-medium text-neutral-900 text-lg sm:text-xl tracking-[0] leading-tight sm:leading-[24px] md:leading-[28px]">
                      Key Strategies for Success
                    </h3>
                    
                    <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
                      <div className="flex flex-col items-start gap-2 sm:gap-3 w-full md:w-auto">
                        {(blogPost.mainContent?.leftColumnItems || []).map((item, index) => (
                          <div key={index} className="flex items-center gap-2 sm:gap-3">
                            <CheckSquareIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                            <div className="font-medium text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-[24px] md:leading-[28px]">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col items-start gap-2 sm:gap-3 w-full md:w-auto">
                        {(blogPost.mainContent?.rightColumnItems || []).map((item, index) => (
                          <div key={index} className="flex items-center gap-2 sm:gap-3">
                            <CheckSquareIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                            <div className="font-medium text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-[24px] md:leading-[28px]">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4 w-full">
                <h2 className="font-semibold text-neutral-900 text-xl sm:text-2xl md:text-3xl tracking-[0] leading-tight sm:leading-[28px] md:leading-[32px] lg:leading-[38.4px]">
                  {blogPost.mainContent?.section2Title || "From Data to Decisions: Why Design Matters"}
                </h2>

                <p className="font-normal text-[#777980] text-base sm:text-lg tracking-[0] leading-relaxed sm:leading-[28.8px]">
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
      <section className="w-full pt-8 sm:pt-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[100px] bg-gray-50">
        {/* Content Container with max-width */}
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col w-full items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <header className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-0">
              <h2 className="font-black text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight sm:leading-[38.4px] md:leading-[48px] lg:leading-[57.6px]">
                Related Blogs
              </h2>
              <p className="w-full lg:w-[554px] font-normal text-[#777980] text-base sm:text-lg tracking-[0] leading-relaxed sm:leading-[28.8px]">
                Explore our curated selection of articles designed to deepen your
                understanding and broaden your perspective. Our related blogs offer
                valuable insights to support your journey.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
              {relatedBlogs.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col gap-2 sm:gap-3 bg-transparent transition-all duration-300 cursor-pointer group"
                  onClick={() => router.push(`/blogdetails?id=${post.id}`)}
                >
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[274px] rounded-lg overflow-hidden">
                        <Image
                          src={post.imageSrc}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.category && (
                          <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                            <div className="bg-[#2970ff] text-white text-xs sm:text-sm font-normal px-2 sm:px-3 py-1 rounded">
                              {post.category}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 md:gap-3">
                        <div className="flex items-center gap-1">
                          <UserIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                          <span className="text-gray-600 text-xs sm:text-sm">
                            {post.author}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                          <span className="text-gray-600 text-xs sm:text-sm">
                            {post.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                          <span className="text-gray-600 text-xs sm:text-sm">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-gray-900 text-base sm:text-lg font-medium leading-tight">
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-1 p-0 rounded-none hover:bg-transparent h-auto mt-1 sm:mt-2 cursor-pointer transition-all duration-200 hover:gap-2">
                      <span className="font-semibold text-[#2970ff] text-sm sm:text-base md:text-lg">
                        Continue reading
                      </span>
                      <ArrowUpRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2970ff]" />
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
      <div className="w-full flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center px-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Blog not found</h1>
          <p className="text-sm sm:text-base text-gray-600">The requested blog post could not be found.</p>
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
