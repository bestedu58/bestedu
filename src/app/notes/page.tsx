import NotesCard, { type NoteCardProps } from "@/components/NotesCard";
import PdfViewer from "@/components/PdfViewer";
import { Client } from "@/lib/Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes for students",
};

const page = async () => {
  const query = `{
  notesCollection {
    items {
      sys {
        publishedAt
      }
      title
      slug
      author {
        name
        image {
          url
        }
      }
    }
  }
}`;

  try {
    const data = await Client(query);
    const notes = data?.notesCollection?.items || [];

    if (notes.length === 0) {
      return <div>No notes available.</div>;
    }

    return (
      <div className=" grid gap-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.notesCollection.items.map(
          (note: NoteCardProps, index: number) => (
            <NotesCard key={index} {...note} />
          ),
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching notes:", error);
    return <div>Failed to load notes. Please try again later.</div>;
  }
};

export default page;
