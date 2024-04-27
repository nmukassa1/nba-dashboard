import { useState, useEffect } from 'react';

function useFetch() {
    const [standings, setStandings] = useState(null);
    const [gamesUpcoming, setGamesUpcoming] = useState(null);
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    currentDate.setDate(currentDay + 1)
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    console.log(date);
    const urlStandings = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023';
    const urlUpcomingGames = `https://api-nba-v1.p.rapidapi.com/games?date=${date}&league=standard&season=2023`;
     
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea0897f4cfmsh80cb589ae78bceap1787b5jsne4777e340118',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    useEffect(() => {
        const fetchData = async (url, options, setState) => {

            try {
                const res = await fetch(url, options);
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();
                setState(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData(urlStandings, options, setStandings);
        fetchData(urlUpcomingGames, options, setGamesUpcoming);
    }, []); // Empty dependency array ensures this effect runs only once after component mount

    return { standings, gamesUpcoming };
}

export default useFetch;
