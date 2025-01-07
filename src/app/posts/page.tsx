import BlogPostCard, {
  BlogPostCardSklaton,
  type BlogPostCardProps,
} from "@/components/BlogPostCard";
import { Client } from "@/lib/Client";
const page = async () => {
  const query = `{
  blogPostCollection {
    items {
      sys {
        publishedAt
      }
      title
      slug
      featuredImage {
        url
      }
      author {
        name
        image {
          url
        }
      }
    }
  }
}`;
  const blogs = await Client(query, {}, 60);
  return (
    <div className=" grid gap-4 bg-gradient-to-tl from-blue-500/15 via-purple-500/30 to-pink-500/15 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {blogs.blogPostCollection.items.map(
        (blog: BlogPostCardProps, index: number) => (
          <BlogPostCard key={index} {...blog} />
        ),
      )}
    </div>
  );
};

export default page;
