"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title:
      "Top 10 Cybersecurity Threats in 2024 and detailed look at the most How to Mitigate Them",
    description:
      "As we move further into 2024, the landscape of cybersecurity continues to evolve with new challenges and threats.",
    date: "Dec 24, 2023",
    imageUrl:
      "/",
    link: "#",
  },
  {
    id: "2",
    title: "How to build an Application with modern Technology",
    description:
      "As we move further into 2024, the landscape of cybersecurity continues to evolve with new challenges and threats.",
    date: "Dec 24, 2023",
    imageUrl:
      "/",
    link: "#",
  },
  {
    id: "3",
    title:
      "Top 10 Cybersecurity Threats in 2024 and detailed look at the most How to Mitigate Them",
    description:
      "As we move further into 2024, the landscape of cybersecurity continues to evolve with new challenges and threats.",
    date: "Dec 24, 2023",
    imageUrl:
      "/",
    link: "#",
  },
  {
    id: "4",
    title: "How to build an Application with modern Technology",
    description:
      "As we move further into 2024, the landscape of cybersecurity continues to evolve with new challenges and threats.",
    date: "Dec 24, 2023",
    imageUrl:
      "/",
    link: "#",
  },
  {
    id: "5",
    title: "How to build an Application with modern Technology",
    description:
      "As we move further into 2024, the landscape of cybersecurity continues to evolve with new challenges and threats.",
    date: "Dec 24, 2023",
    imageUrl:
      "/",
    link: "#",
  },
];

const POSTS_PER_PAGE = 3;

export function Blog() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextPage();
      } else if (event.key === "ArrowLeft") {
        prevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentPosts = blogPosts.slice(
    currentPage * POSTS_PER_PAGE,
    (currentPage + 1) * POSTS_PER_PAGE
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Our Latest Blog Posts</h2>
        <h3 className="text-xl text-gray-600">on Data Security</h3>
      </div>

      {/* Featured Posts */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {blogPosts.slice(0, 2).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>
              <Link
                href={post.link}
                className="inline-flex items-center text-black font-semibold hover:text-gray-600">
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Read More Posts Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Read More Posts</h2>
      </div>

      {/* More Posts Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>
              <Link
                href={post.link}
                className="inline-flex items-center text-black font-semibold hover:text-gray-600">
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots and Navigation */}
      <div className="flex justify-center items-center gap-4">
        <button onClick={prevPage} className="p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full ${
              currentPage === index ? "bg-black" : "bg-gray-300"
            }`}></button>
        ))}
        <button onClick={nextPage} className="p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
