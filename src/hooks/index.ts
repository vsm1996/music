import { Album, Artist } from "@/app/api/v1/_data/data"
import { useEffect, useState } from "react"

export const useFetch = (urls: string[]) => {
  const [data, setData] = useState<[Album[], Artist[]]>([[], []])
  const [error, setError] = useState<unknown | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (urls.length === 0) {
      setLoading(false);
      return;
    }

    setLoading(true)
    setError(null)

    Promise.all(urls.map((url) =>
      fetch(url).then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
        }
        return res.json();
      }))
    ).then(
      data => {
        console.log("Data fetched:", data);
        setData([data[0], data[1]])
      }
    ).catch(
      error => {
        console.error("Error fetching data:", error);
        console.log(typeof error)
        setError(error)
      }
    ).finally(
      () => {
        console.log("Finished fetching data.");
        setLoading(false)
      }
    )
  }, [urls])

  return { data, error, isLoading }
}