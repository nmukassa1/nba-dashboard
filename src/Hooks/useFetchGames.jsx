import {useState, useEffect} from 'react';
import useFetch from "./useFetch";

const currentDate = new Date();
const baseUrl = `https://api-nba-v1.p.rapidapi.com/games?league=standard&season=${currentDate.getFullYear() - 1}`
const miliseconds = currentDate.getTime();
let previousTwoGames = new Date(currentDate)
// previousTwoGames.setDate()

function useFetchGames() {
    const [games, setGames] = useState([])
    const {data, fetchData} = useFetch();

    useEffect(() => {
        fetchData(baseUrl)
    }, [])

    useEffect(() => {
        if(data && data.results > 0){
            // Find index of upcoming game
            const upcomingGameIndex = data.response.findIndex((game) => (new Date(game.date.start).getTime() >= miliseconds ))

            //Get last game
            const games = data.response.slice(upcomingGameIndex - 1, upcomingGameIndex + 3)

            setGames(games)
        }
    }, [data])

   


    return {games};
}

export default useFetchGames;