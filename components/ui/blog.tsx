"use client";

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
      "/images/blog/blog-1.jpg",
    link: "#",
  },
  {
    id: "2",
    title: "How to build an Application with modern Technology",
    description:
      "As we move further into 2024, the landscape of cybersecurity continues to evolve with new challenges and threats.",
    date: "Dec 24, 2023",
    imageUrl:
      "/images/blog/blog-2.jpg",
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
      "/images/blog/blog-3.jpg",
    link: "#",
  },
  {
    id: "4",
    title: "How to build an Application with modern Technology",
    description:
      "As we move further into 2024, the landscape of cybersecurity continues to evolve with new challenges and threats.",
    date: "Dec 24, 2023",
    imageUrl:
      "/images/blog/blog-4.jpg",
    link: "#",
  },
  {
    id: "5",
    title: "How to build an Application with modern Technology",
    description:
      "As we move further into 2024, the landscape of cybersecurity continues to evolve with new challenges and threats.",
    date: "Dec 24, 2023",
    imageUrl:
      "/images/blog/blog-5.jpg",
    link: "#",
  },
];

export function Blog() {
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
                src={post.imageUrl}
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
        {blogPosts.slice(2, 5).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src={post.imageUrl}
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

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2">
        <button className="w-2 h-2 rounded-full bg-black"></button>
        <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        <button className="w-2 h-2 rounded-full bg-gray-300"></button>
      </div>
    </div>
  );
}
