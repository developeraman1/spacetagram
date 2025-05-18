"use client"
import { useState } from "react"
import { Button } from "./ui/button"

export default function ExpandableDescription({ explanation }: { explanation: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <p className="text-sm leading-relaxed text-muted-foreground">
      {isExpanded ? explanation : explanation.slice(0, 130)}
      <Button
        variant={"link"}
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-primary underline hover:text-primary/80 transition"
      >
        {isExpanded ? "Show less" : "Read more"}
      </Button>
    </p>
  )
}