import { fetchApods } from "@/lib/fetchApods";
import { ApodResponse } from "@/types/nasa";
import PaginatedApods from "@/components/PaginatedApods";

export default async function Home() {
  // Get today's date and 14 days ago
  const today = new Date();
  const endDate = new Date().toISOString().split('T')[0];

  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(today.getDate() - 30);
  const startDate = thirtyDaysAgo.toISOString().split('T')[0];
  
  // Fetch data directly in the server component
  const apodsData: ApodResponse[] = await fetchApods(startDate, endDate);

  return <PaginatedApods apods={apodsData} />

}