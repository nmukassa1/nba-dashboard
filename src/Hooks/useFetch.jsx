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

  //   const fetchData = async (url, retries = 5) => {
  //     const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  //     setLoading(true);
  //     setError(null);
  
  //     for (let attempt = 0; attempt < retries; attempt++) {
  //         try {
  //             const request = await fetch(url, options);
  
  //             if (!request.ok) {
  //                 if (request.status === 429) {
  //                     let retryAfter = request.headers.get('Retry-After');
  //                     let waitTime = retryAfter ? retryAfter * 1000 : Math.pow(2, attempt) * 1000;
  //                     if (attempt === retries - 1) {
  //                         setRefreshPage(true);
  //                         throw new Error('Failed to fetch. Status code: 429 after maximum retries');
  //                     }
  //                     await delay(waitTime);
  //                     continue; // Retry the request
  //                 }
  //                 throw new Error('Failed to fetch. Status code: ' + request.status);
  //             }
  
  //             const res = await request.json();
  //             setData(res);
  //             break; // Exit the loop if the request is successful
  //         } catch (error) {
  //             if (attempt === retries - 1) {
  //                 setError(error);
  //                 console.error(error);
  //             }
  //         } finally {
  //             setLoading(false);
  //             setRefreshPage(false);
  //         }
  //     }
  // };
  

    return {data, fetchData, refreshPage};
}

export default useFetch;