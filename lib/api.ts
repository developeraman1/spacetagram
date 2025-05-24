import { ApodResponse } from "@/types/nasa";

export async function fetchApod(startDate: string, endDate: string): Promise<ApodResponse[]> {
  const apiKey = process.env.NASA_API_KEY;

  try {

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}&thumbs=true`,
      { 
        next: { revalidate: 3600 }, 
        headers: { 'Accept': 'application/json' },
      }
    );


    if (!response.ok) return [];

    const data: ApodResponse[] = await response.json();
    return data
      .map(item => ({
        ...item,
        date: new Date(item.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }))
      .reverse();
    

  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('Request timed out after 10 seconds');
    }
    return [];
  }
}

