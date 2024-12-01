import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { Skeleton } from "@/components/ui/skeleton"

// // interface BlogPostCardProps {
// //   title: string
// //   thumbnailUrl: string
// //   authorName: string
// //   authorAvatarUrl: string
// //   viewCount: number
// //   publishedAt: string
// // }

// export default function BlogPostCard({
//   title,
//   thumbnailUrl,
//   summary,
//   authorName,
//   authorImage,
//   // viewCount,
//   // publishedAt
// }
// // : BlogPostCardProps
// ) {
//   return (
//     <Card className="max-w-[360px] overflow-hidden">
//       <div className="relative aspect-video">
//         <Image
//           src={thumbnailUrl}
//           alt={title}
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>
//       <CardContent className="p-4">
//         <h3 className="font-semibold text-lg line-clamp-2 mb-2">{title}</h3>
//         <div className="flex items-start space-x-3">
//           <Avatar className="w-8 h-8">
//             <AvatarImage src={authorImage} alt={authorName} />
//             <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
//           </Avatar>
//           <div className="flex flex-col">
//             <p className="text-sm text-muted-foreground">{authorName}</p>
//             <p className="text-xs text-muted-foreground">{summary}
//               {/* {viewCount.toLocaleString()} views • {publishedAt} */}
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// export function BlogPostCardSkeleton() {
//   return (
//     <Card className="max-w-[360px] overflow-hidden">
//       <Skeleton className="aspect-video w-full" />
//       <CardContent className="p-4">
//         <Skeleton className="h-6 w-full mb-2" />
//         <Skeleton className="h-4 w-3/4 mb-2" />
//         <div className="flex items-start space-x-3">
//           <Skeleton className="w-8 h-8 rounded-full" />
//           <div className="flex flex-col space-y-1 flex-1">
//             <Skeleton className="h-4 w-1/2" />
//             <Skeleton className="h-3 w-1/3" />
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// // 'use client';

// // import React from 'react';

// // const BlogPostCard = ({ title, summary, authorName, authorImage }) => {
// //   return (
// //     <div className="blog-post-card">
// //       <h2>{title}</h2>
// //       <p>{summary}</p>
// //       <div className="author">
// //         {authorImage && (
// //           <img
// //             src={authorImage}
// //             alt={authorName}
// //             className="author-image"
// //           />
// //         )}
// //         <span className="author-name">{authorName}</span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogPostCard;
import React from "react";

const BlogGrid = ({
  title,
  category,
  postimage,
  postalt,
  authorName,
  authorImage,
}) => {
  return (
    <div>
      <article className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 focus-within:ring-2 focus-within:ring-indigo-500">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={postimage}
            alt={postalt}
            priority
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            width={190}
            height={200}
          />
          {category && (
                <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {category}
                </span>
              </div>
              )}
        </div>

        <div className="p-6 flex flex-col-2">
          <div className="w-12 h-12 text-gray-500">
            {authorImage && (
              <Avatar className="w-8 h-8">
                <AvatarImage src={authorImage} alt={authorName} />
                <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between">
              
              {/* <div className="flex items-center text-gray-500 text-sm">
                  <BsCalendar3 className="mr-2" />
                  <span>{post.date}</span>
                </div> */}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-indigo-600 transition-colors duration-200">
              {title}
            </h3>

            <Button
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500 transition-colors duration-200"
              aria-label={`Read more about ${title}`}
            >
              Read More
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogGrid;
