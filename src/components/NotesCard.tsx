import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export interface NoteCardProps {
  title: string;
  slug: string;
  sys: { publishedAt: string };
  author: {
    name: string;
    image: { url: string };
  };
}
const NotesCard = ({ title, author, slug, sys }: NoteCardProps) => {
  return (
    <Card className="overflow-hidden">
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
          <Link href={`/notes/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NotesCard;
