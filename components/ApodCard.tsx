import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

import ExpandableDescription from "./Description"

interface CardProps {
  title: string
  explanation: string
  url: string
  date: string
  mediaType: string
  thumbnail_url?: string
}

export default function ApodCard({
  title,
  explanation,
  url,
  date,
  mediaType,
  thumbnail_url
}: CardProps) {
  const imageUrl = mediaType === "video" ? thumbnail_url || "" : url;

  if (!imageUrl) return null;

  return (
    <Card className="overflow-hidden border-none shadow-xl bg-white/5 backdrop-blur-sm">
      <CardHeader className="space-y-2 pb-4">
        <CardTitle className="text-2xl font-bold tracking-tight leading-none">
          {title}
        </CardTitle>
        <CardDescription className="text-sm font-medium text-muted-foreground">
          {date}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
            priority
            className="object-cover transition-all hover:scale-105 duration-700"
          />
        </div>

        <div className="px-6 py-4">
          <ExpandableDescription explanation={explanation} />
        </div>
      </CardContent>

      <CardFooter className="pt-0 px-6 pb-6" />
    </Card>
  )
}