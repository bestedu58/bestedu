import { Client } from "@/lib/Client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { notFound } from "next/navigation";
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const MY_QUERY = `query my($slug: String!) {
  blogPostCollection(where: {slug: $slug}) {
    items {
      title
      slug
      tags
      featuredImage {
        url
        title
      }
      author {
        name
        image {
          url
        }
      }
      content {
        json
      }
    }
  }
}`;
  const { blogPostCollection } = await Client(MY_QUERY, { slug });
  console.log(blogPostCollection);

  const post = blogPostCollection.items[0];
  console.log(post);

  if (!post) {
    notFound();
  }
  return (
    <article className="mx-auto max-w-4xl">
      <div className="mb-8 space-y-4 text-center">
        <h1 className="font-bold text-4xl">{post.title}</h1>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={post.author.image.url}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-medium">{post.author.name}</p>
              <p className="text-muted-foreground text-sm">Author</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-8 aspect-video">
        <Image
          src={post.featuredImage.url}
          alt={post.featuredImage.title}
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {documentToReactComponents(post.content.json)}
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default page;
