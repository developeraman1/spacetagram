import { ApodResponse } from "@/types/nasa";

export async function fetchApods(startDate: string, endDate: string): Promise<ApodResponse[]> {
  const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;

  if (!apiKey) {
    throw new Error("NASA API key is not configured");
  }

  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`,
      {
        next: { revalidate: 3600 },
        headers: {
          'Accept': 'application/json',
        }
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch APOD data");
    }

    const data: ApodResponse[] = await response.json();
    
    // Format dates and filter unwanted items
    return data
      .map(item => ({
        ...item,
        date: new Date(item.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }))
      .filter(item => !item.url.includes('youtube.com'))
      .reverse();

  } catch (error) {
    console.error('Error fetching APOD data:', error);
    throw error;
  }
}