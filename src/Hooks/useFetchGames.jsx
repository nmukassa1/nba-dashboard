import {useState, useEffect} from 'react';
import useFetch from "./useFetch";

const currentDate = new Date();
const baseUrl = `https://api-nba-v1.p.rapidapi.com/games?league=standard&season=${currentDate.getFullYear() - 1}`
const miliseconds = currentDate.getTime();

function useFetchGames() {
    const [games, setGames] = useState([])
    const {data, fetchData} = useFetch();

    useEffect(() => {
        fetchData(baseUrl)
    }, [])

    useEffect(() => {
        if(data && data.results > 0){
            const games = data.response.filter((game) => (new Date(game.date.start).getTime() >= miliseconds ))
            setGames(games)
        }
    }, [data])

   


    return {games};
}

export default useFetchGames;