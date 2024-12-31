import Pdfviewer from "@/components/PdfViewer";
import { Client } from "@/lib/Client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogPost({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const query = `query ($slug: String!) {
  notesCollection(where: {slug: $slug}) {
    items {
      sys {
        publishedAt
      }
      title
      slug
      note {
        url
        contentType
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
  const { notesCollection } = await Client(query, { slug }, 60);

  const post = notesCollection.items[0];

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-6xl">
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
      <Pdfviewer {...post.note} />
    </article>
  );
}
