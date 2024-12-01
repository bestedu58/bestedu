import {  BlogPostCardSkeleton } from "@/components/postcard";
export default function Loading() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Latest Blog Posts</h1>
      <BlogPostCardSkeleton />
      <BlogPostCardSkeleton />
      <BlogPostCardSkeleton />
      <BlogPostCardSkeleton />
    </div>
  );
}
