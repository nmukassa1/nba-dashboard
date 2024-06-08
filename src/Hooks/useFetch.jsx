import { useState } from "react";

function useFetch() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshPage, setRefreshPage] = useState(false);

    const options = {
        method: 'get',
        headers: {
        'X-RapidAPI-Key': 'ea0897f4cfmsh80cb589ae78bceap1787b5jsne4777e340118',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    }

    const fetchData = async (url) => {
        setLoading(true)
        setError(null)
        try{
          const request = await fetch(url, options)
          if(!request.ok){
            throw new Error('Failed to fetch. Status code: ' + request.status)
          }
          const res = await request.json()
          setData(res)
        } catch(error){
          setError(error)
          console.error(error)
        } finally{
          setLoading(false)
          setRefreshPage(false)
        }
    }  

  return {data, fetchData, refreshPage};
}

export default useFetch;