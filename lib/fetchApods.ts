import { ApodResponse } from "@/types/nasa";

export async function fetchApods(startDate: string, endDate: string): Promise<ApodResponse[]> {
  const apiKey = process.env.NASA_API_KEY;

  if (!apiKey) {
    console.error("NASA API key is missing");
    return [];
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
      const errorText = await response.text();
      console.error(`NASA API Error: ${response.status} - ${errorText}`);
      return [];
    }

    const data: ApodResponse[] = await response.json();
    
    if (!Array.isArray(data)) {
      console.error("Invalid response format from NASA API");
      return [];
    }

    // Validate and filter items more safely
    return data
      .filter(item => {
        // Check if item exists and has required properties
        if (!item || !item.url || !item.date) {
          return false;
        }
        // Filter out YouTube videos
        if (item.url.toLowerCase().includes('youtube.com') || 
            item.url.toLowerCase().includes('youtu.be')) {
          return false;
        }
        return true;
      })
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
    console.error('Error fetching APOD data:', error);
    return [];
  }
}