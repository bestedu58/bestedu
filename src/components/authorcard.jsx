import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

// interface BlogPostCardProps {
//   title: string
//   thumbnailUrl: string
//   authorName: string
//   authorAvatarUrl: string
//   viewCount: number
//   publishedAt: string
// }

export function AuthorCard({
  authorName,
  authorAvatarUrl,
  viewCount,
  publishedAt
}
// : BlogPostCardProps
) {
  return (
    <Card className="max-w-[360px] overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={authorAvatarUrl}
          alt={authorName}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 mb-2">{authorName}</h3>
        <div className="flex items-start space-x-3">
          
          <div className="flex flex-col">
            <p className="text-xs text-muted-foreground">
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function AuthorCardSkeleton() {
  return (
    <Card className="max-w-[360px] overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <CardContent className="p-4">
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <div className="flex items-start space-x-3">
          <Skeleton className="w-8 h-8 rounded-full" />
          <div className="flex flex-col space-y-1 flex-1">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

