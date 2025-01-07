import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface BlogPostCardProps {
  title: string;
  slug: string;
  sys: { publishedAt: string };
  author: {
    name: string;
    image: { url: string };
  };
  featuredImage: { url: string };
}
export default function BlogPostCard({
  title,
  slug,
  author,
  sys,
  featuredImage,
}: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={featuredImage.url}
          alt={title}
          fill
          className=" rounded-xl object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="font-bold text-2xl text-primary leading-tight">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={author.image.url} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{author.name}</p>
            <div className="flex items-center text-muted-foreground text-xs">
              <CalendarIcon className="mr-1 h-3 w-3" />
              <span>{new Date(sys.publishedAt).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/posts/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
import React from "react";
import { Skeleton } from "./ui/skeleton";

export const BlogPostCardSklaton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Skeleton className="h-full w-full" />
      </div>
      <CardHeader>
        <Skeleton className="h-8 w-full" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar>
            <Skeleton className="h-full w-full" />
          </Avatar>
          <div className=" flex-grow">
            <Skeleton className="my-1 h-4 w-full" />
            <div>
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-9 w-full" />
      </CardFooter>
    </Card>
  );
};
