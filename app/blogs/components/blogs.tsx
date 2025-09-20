"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, User, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogData, categories, tagCloudTags, BlogPost } from "@/app/lib/appdata";

export const FrameWrapperSubsection = (): React.JSX.Element => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allArticles = blogData;

  // Filter articles based on search, category, and tag
  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="flex items-start gap-8">
          <aside className="flex flex-col w-[420px] items-start gap-8">
        {/* Search Section */}
        <Card className="bg-gradient-to-br from-[#00294B] to-[#3C6399] border-none rounded-lg w-full">
          <CardContent className="p-6">
            <div className="flex flex-col items-start gap-8">
              <h2 className="text-white text-2xl font-semibold">
                Search
              </h2>
              <div className="flex h-14 justify-between p-4 w-full bg-white items-center rounded-md">
                <Input
                  placeholder="Search here"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 border-none bg-transparent text-gray-600 focus-visible:ring-0"
                />
                <Search className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories Section */}
        <Card className="bg-gradient-to-br w-full from-[#00294B] to-[#3C6399] border-none rounded-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-start gap-8">
              <h2 className="text-white text-2xl font-semibold">
                Categories
              </h2>
              <div className="flex flex-col items-start gap-4 w-full">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`flex items-center justify-start pt-0 pb-4 px-0 w-full border-b border-white hover:bg-transparent h-auto text-left cursor-pointer transition-all duration-200 ${
                      selectedCategory === category.name ? 'bg-white/10' : ''
                    }`}
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                  >
                    <span className="flex-1 text-left text-white text-lg font-medium">
                      {category.name} ({category.count})
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tag Cloud Section */}
        <Card className="bg-gradient-to-br w-full from-[#00294B] to-[#3C6399] border-none rounded-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-start gap-8">
              <h2 className="text-white text-2xl font-semibold">
                Tag Cloud
              </h2>
              <div className="flex flex-col items-start gap-4">
                {tagCloudTags.map((tagRow, rowIndex) => (
                  <div key={rowIndex} className="flex items-start gap-4">
                    {tagRow.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className={`h-12 px-3 text-white text-sm font-normal rounded-md cursor-pointer transition-all duration-200 hover:scale-105 ${
                          selectedTag === tag ? 'bg-[#1e40af]' : 'bg-[#2970ff] hover:bg-[#1e40af]'
                        }`}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
          </aside>

          {/* Main Content Area */}
          <main className="flex flex-col w-[869px] items-start gap-8">
            {/* Filter Status */}
            {(searchTerm || selectedCategory || selectedTag) && (
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-sm text-gray-600">
                  Showing {filteredArticles.length} of {allArticles.length} articles
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                    setSelectedTag(null);
                  }}
                  className="cursor-pointer"
                >
                  Clear Filters
                </Button>
              </div>
            )}
            
        <div className="grid grid-cols-2 gap-8 w-full">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
            <Card
              key={article.id}
              className="flex flex-col items-start gap-3 border-none shadow-none bg-transparent transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-0 w-full">
                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    {/* Article Image */}
                    <div className="relative w-full h-[274px] rounded-lg overflow-hidden">
                      <Image
                        src={article.imageSrc}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {article.category && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-[#2970ff] hover:bg-[#2970ff] text-white text-sm font-normal">
                            {article.category}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Article Metadata */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">
                          {article.author}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">
                          {article.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-gray-900 text-lg font-medium leading-tight">
                    {article.title}
                  </h3>
                </div>

                {/* Continue Reading Button */}
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 p-0 rounded-none hover:bg-transparent h-auto mt-2 cursor-pointer transition-all duration-200 hover:gap-2"
                  onClick={() => router.push(`/blogdetails?id=${article.id}`)}
                >
                  <span className="font-semibold text-[#2970ff] text-lg">
                    Continue reading
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-[#2970ff]" />
                </Button>
              </CardContent>
            </Card>
            ))
          ) : (
            <div className="col-span-2 flex flex-col items-center justify-center py-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                    setSelectedTag(null);
                  }}
                  className="cursor-pointer"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default function Blogs() {
  return <FrameWrapperSubsection />;
}
