import { useState, useEffect } from "react";
import useFetchGames from "../Hooks/useFetchGames";
import GameCard from "../components/GameCard";

function Games() {
    const {games} = useFetchGames()
    const [gameScheduel, setGameScheduel] = useState()
    let arr = []

    useEffect(() => {
        if(games.length > 0){
            games.forEach((game) => {
                game.forEach((item) => {
                    arr.push(item)
                })
            })
            const sortGames = arr.sort((a,b) => new Date(a.date.start).getTime() - new Date(b.date.start).getTime())
            // console.log(sortGames);
            setGameScheduel(sortGames)
        }
    }, [games])


    return ( 
        <div id="games-container" className="container">
            {gameScheduel && (
                gameScheduel.map((game) => (
                    <GameCard game={game} key={game.id} />
                ))
            )}
        </div>    
    );
}

export default Games;