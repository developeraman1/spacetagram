import { fetchApods } from "@/lib/fetchApods";
import { ApodResponse } from "@/types/nasa";
import PaginatedApods from "@/components/PaginatedApods";

export default async function Home() {
 
  const today = new Date();
  const endDate = new Date().toISOString().split('T')[0];

  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(today.getDate() - 30);
  const startDate = thirtyDaysAgo.toISOString().split('T')[0];
  

  const apodsData: ApodResponse[] = await fetchApods(startDate, endDate);

  return <PaginatedApods apods={apodsData} />

}