"use client"
import { useState } from "react"
import { ApodResponse } from "@/types/nasa"
import ApodCard from "./ApodCard"
import { PaginationControls } from "./Paginated"

const ITEMS_PER_PAGE = 5

export default function PaginatedApods({ apods }: { apods: ApodResponse[] }) {
  const [currentPage, setCurrentPage] = useState(1)

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return apods.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }

  return (
    <div className="flex flex-col gap-6">
      {getCurrentPageData().map((apod) => (
        <ApodCard
          key={apod.date}
          title={apod.title}
          description={apod.explanation}
          image={apod.url}
          date={apod.date}
        />
      ))}

      <PaginationControls
        totalItems={apods.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />
    </div>
  )
}