import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          The Future of Web Development: Trends to Watch in 2024
        </h1>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium">John Doe</p>
            <p className="text-sm text-muted-foreground">Published on May 15, 2023</p>
          </div>
        </div>
      </header>

      <Image
        src="/placeholder.svg?height=400&width=800"
        alt="Blog post featured image"
        width={800}
        height={400}
        className="w-full rounded-lg mb-8"
      />

      <div className="prose prose-lg sm:prose-xl lg:prose-2xl dark:prose-invert max-w-none">
        <p>
          As we approach 2024, the landscape of web development continues to evolve at a rapid pace. 
          New technologies, frameworks, and methodologies are emerging, reshaping how we build and 
          interact with the web. In this post, we'll explore some of the most exciting trends that 
          are set to dominate the world of web development in the coming year.
        </p>

        <h2>1. The Rise of AI-Powered Development Tools</h2>
        <p>
          Artificial Intelligence is no longer just a buzzword; it's becoming an integral part of 
          the web development process. From AI-assisted coding to automated testing and debugging, 
          developers are leveraging machine learning algorithms to streamline their workflows and 
          boost productivity.
        </p>

        <h2>2. Web Assembly and the Future of Browser-Based Applications</h2>
        <p>
          Web Assembly (Wasm) is gaining traction as a powerful tool for bringing high-performance 
          applications to the browser. As more languages add support for Wasm, we can expect to see 
          a surge in complex, desktop-quality applications running directly in web browsers.
        </p>

        <h2>3. The Continued Evolution of Jamstack</h2>
        <p>
          The Jamstack architecture has revolutionized how we think about building websites. In 2024, 
          we'll see further refinements to this approach, with improved build times, better developer 
          experiences, and more sophisticated pre-rendering techniques.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Web Development</Badge>
          <Badge variant="secondary">Technology Trends</Badge>
          <Badge variant="secondary">AI</Badge>
          <Badge variant="secondary">Web Assembly</Badge>
          <Badge variant="secondary">Jamstack</Badge>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-center text-muted-foreground">Comments are loading...</p>
        </div>
      </div>
    </article>
  )
}

