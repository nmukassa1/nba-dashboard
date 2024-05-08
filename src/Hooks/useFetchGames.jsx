import {useState, useEffect} from 'react';
import useFetch from "./useFetch";

function useFetchGames() {
    const [games, setGames] = useState(null)
    const [query, setQuery] = useState();
    const [dates, setDates] = useState();
    const [res, setRes] = useState([]);
    const [dateTracker, setDateTracker] = useState(0)
    const [url, setUrl] = useState(`https://api-nba-v1.p.rapidapi.com/games?date=${query}`);

    const {data, fetchData} = useFetch();

    useEffect(() => {
        // Set state to object so I can work with it
            setDates(Object.values(getDate()))
    }, [])
    useEffect(() => {
        // setQuery(dates[dateTracker])
        if(dates && dates.length > 0 && dateTracker !== 3){
            // setUrl()
            setQuery(dates[dateTracker])
        }
    }, [dates, dateTracker])
    
    useEffect(() => {
        setUrl(`https://api-nba-v1.p.rapidapi.com/games?date=${query}`);
    }, [query])

    useEffect(() => {
        fetchData(url)
    }, [url])

    useEffect(() => {
        if (data && data.results > 0) {
            setRes(prevRes => [...prevRes, data]);
            setDateTracker(a => a + 1);
        }
        // console.log(data.results);
    }, [data])

   
    //Get yesterdays, todays & tomorrows date and return an object
    function getDate() {
        const currentDate = new Date();
        // Set time to 00:00
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);
    
        // Get yesterday's date
        const yesterday = new Date(currentDate);
        yesterday.setDate(yesterday.getDate() - 1);
    
        // Get tomorrow's date
        const tomorrow = new Date(currentDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
    
        // Format dates
        const formatDate = (date) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            return `${year}-${month}-${day}`;
        };
    
        return {
            yesterday: formatDate(yesterday),
            today: formatDate(currentDate),
            tomorrow: formatDate(tomorrow)
        };
    }


    return {games, res};
}

export default useFetchGames;