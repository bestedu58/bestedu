import { BlogPostCardSklaton } from "@/components/BlogPostCard";
import React from "react";

function loading() {
  return (
    <div className="grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <BlogPostCardSklaton />
      <BlogPostCardSklaton />
      <BlogPostCardSklaton />
      <BlogPostCardSklaton />
    </div>
  );
}

export default loading;
