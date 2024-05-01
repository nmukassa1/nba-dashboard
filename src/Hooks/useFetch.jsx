import { useState, useEffect } from "react";

function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: 'get',
    headers: {
      'X-RapidAPI-Key': 'ea0897f4cfmsh80cb589ae78bceap1787b5jsne4777e340118',
		  'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try{
        const request = await fetch(url, options)
        if(!request.ok){
          throw new Error('Failed to fetch. Status code: ' + request.status)
        }
        const res = await request.json()
        // console.log(res);
        setData(res)
      } catch(error){
        setError(error)
        console.error(error)
      } finally{
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {data, loading, error};
}

export default useFetch;