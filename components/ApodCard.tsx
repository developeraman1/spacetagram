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
  description: string
  image: string
  date: string
}

export default function ApodCard({
  title,
  description,
  image,
  date,
}: CardProps) {
  return (
    <Card className="rounded-2xl bg-background shadow-lg border border-border text-foreground overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold leading-snug">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {date}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className="relative w-full h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[42rem]">
          <Image
            src={image}
            alt={title}
            sizes="100vh"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <ExpandableDescription description={description} />
        </div>
      </CardContent>

      <CardFooter className="pt-0 px-6 pb-4" />
    </Card>
  )
}