import BlogPostCard from "@/components/postcard";
import { fetchPosts } from "@/lib/graphql";
import Link from "next/link";

const query = `
  query GetPosts {
    blogpostCollection {
      items {
        title
        slug
        summary
        category {
          name
        }
        featuredImage{url title}
        author {
          name
          picture {
            url
            
          }
        }
      }
    }
  }
`;

// async function fetchPosts() {
//   const response = await fetch(CONTENTFUL_ENDPOINT, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
//     },
//     body: JSON.stringify({ query }),
//   });

//   const { data } = await response.json();
//   console.log(data);
//   return data.blogpostCollection.items;
// }

export default async function PostsPage() {
  const {data} = await fetchPosts({ query: query });
  const posts = data.blogpostCollection.items
console.log(posts);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">
          Latest from our blog
        </h2>
        <p className="text-lg text-muted">
          Stay updated with our latest insights and articles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/test/${post.slug}`}>
              <BlogPostCard
                title={post.title}
                category={post.category?.name}
                postalt={post.featuredImage.title}
                postimage={`${post.featuredImage.url}?fit=pad&w=192&h=200`}
                // summary={post.summary}
                authorName={post.author.name}
                authorImage={`${post.author.picture.url}?fit=pad&w=32&h=32`}
              />
            </Link>
          </div>
        ))} 
      </div>
    </div>
  );
}
