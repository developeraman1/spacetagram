import {fetchApod} from "@/lib/api";
import PaginatedApods from "@/components/PaginatedApods";
import { ApodResponse } from "@/types/nasa";

export default async function Home() {
 
  const today = new Date();
  const endDate = new Date().toISOString().split('T')[0];

  const daysAgo = new Date(today);
  daysAgo.setDate(today.getDate() - 24);
  const startDate = daysAgo.toISOString().split('T')[0];
  

  const apodsData: ApodResponse[] = await fetchApod(startDate, endDate);

  return <PaginatedApods apods={apodsData} />

}