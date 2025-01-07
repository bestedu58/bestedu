import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Client } from "@/lib/Client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Github, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {
  const query = `{
  author(id: "2hLzKqp4dLsjFNay6Ugd8f") {
    name
    image {
      url
      width
      height
      fileName
    }
    about {
      json
    }
  }
}`;
  const { author } = await Client(query);
  console.log(author);
  return (
    <div className=" grid h-screen w-full items-center justify-center bg-gradient-to-tl from-slate-800/10 via-red-300/10 to-slate-600/10 ">
      <h1 className=" self-center font-extrabold text-3xl tracking-tighter ">
        {author.name}
      </h1>
      <Avatar className=" flex h-40 w-40 items-center tracking-tighter">
        <AvatarImage
          src={`${author.image.url}?w=160&h=160`}
          alt={author.name}
        />
        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="prose">
        {documentToReactComponents(author.about.json)}
      </div>
      <Link
        className="flex gap-1 text-pretty text-primary"
        href="tel:+9779849914341"
      >
        <PhoneCallIcon /> call me
      </Link>
      <Link
        className="flex gap-1 text-pretty text-primary"
        href="tel:+9779849914341"
      >
        <PhoneCallIcon /> call me
      </Link>
      <Link
        className="flex gap-1 text-pretty text-primary"
        href="tel:+9779849914341"
      >
        <PhoneCallIcon /> call me
      </Link>
      <Link
        className="flex gap-1 text-pretty text-primary"
        href="tel:+9779849914341"
      >
        <Github color="#0011ff" /> call me
      </Link>
    </div>
  );
}
