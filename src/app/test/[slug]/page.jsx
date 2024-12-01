import BlogPostCard from "@/components/postcard";
import { fetchPost } from "@/lib/graphql";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FacebookIcon, User2Icon } from "lucide-react";
import Link from "next/link";

const CONTENTFUL_SPACE_ID = "agwa05lvimrq";
const CONTENTFUL_ACCESS_TOKEN = "3dRoCc2s_dyuFjEokTjWVZCysWq_zSB1LSrSQMTBMZY";
const CONTENTFUL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

const query = `
query GetPosts($slug: String!) {
  blogpostCollection(where: {slug: $slug}) {
    items {
      title
      slug
      author {
        name
        facebook
        github
        picture {
          url
        }
      }
      featuredImage{
        url
      }
      body {
        json
      }
    }
  }
}
`;

export default async function PostsPage({ params }) {
  // const posts = await fetchPosts(parems.slug);
  const { slug } = await params;
  const post = await fetchPost({ query: query, slug: slug });
  // console.log("Posts:", JSON.stringify(post, null, 2));

  return (
    <div>
      <h1>{params.slug}</h1>
      <ul>
        <li key={post.slug}>
          <h2>{post.title}</h2>
          <h2>{post.slug}</h2>
          <h2>{post.summary}</h2>
          <h2>{post.featuredImage.url}</h2>
          <h2>{post.author.name}</h2>
          <Link href={post.author.facebook}><User2Icon/></Link>
          <Link href={post.author.picture.url}>{post.author.picture.url}</Link>
          {documentToReactComponents(post.body.json)}
          
        </li>
      </ul>
    </div>
  );
}
