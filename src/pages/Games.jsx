import { useState, useEffect } from "react";
import useFetchGames from "../Hooks/useFetchGames";
import GameCard from "../components/GameCard";

function Games() {
    const {games} = useFetchGames()
    // const [gameScheduel, setGameScheduel] = useState()
    // let arr = []

    // useEffect(() => {
    //     if(games.length > 0){
    //         // console.log(Object.values(games))
    //         games.forEach((game) => {
    //             game.forEach((item) => {
    //                 arr.push(item)
    //             })
    //         })
    //         setGameScheduel(arr)
    //     }
    // }, [games])

    // useEffect(() => {
    //     console.log(gameScheduel);
    // }, [gameScheduel])
    console.log(games);

    return ( 
        <div id="games-ui" className="container">
            {/* {gameScheduel && (
                gameScheduel.map((game) => (
                    <GameCard game={game} />
                ))
            )} */}
        </div>    
    );
}

export default Games;