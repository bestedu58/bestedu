import BlogPostCard, {
  BlogPostCardSklaton,
  type BlogPostCardProps,
} from "@/components/BlogPostCard";
import { Client } from "@/lib/Client";
export const revalidate = 10;
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
  const blogs = await Client(query);
  return (
    <div className=" grid gap-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {blogs.blogPostCollection.items.map(
        (blog: BlogPostCardProps, index: number) => (
          <BlogPostCard key={index} {...blog} />
        ),
      )}
    </div>
  );
};

export default page;
