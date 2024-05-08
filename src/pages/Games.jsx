import { useState, useEffect } from "react";
import useFetchGames from "../Hooks/useFetchGames";
import GameCard from "../components/GameCard";

function Games() {
    const {games, res} = useFetchGames()
    // console.log(Object.values(dates));
    // const [games, setGames] = useState([]);

    // useEffect(() => {
    //     if (gamesUpcoming) {
    //         const arr = gamesUpcoming.response;
    //         const sort = arr.sort((a, b) => b.date.start - a.date.start)
    //         setGames(gamesUpcoming.response)
    //         console.log(sort);
    //     }
    // }, [gamesUpcoming]); // Run effect when standings changes

    useEffect(() => {
        console.log(res);
    }, [res])

    return ( 
        <div id="games-ui">
            {/* {games.length > 0 && (
                games.map((game) => (
                    <GameCard game={game} standings={standings} />
                ))
            )} */}
            {/* {data ? 'Working' : 'Not working'} */}
        </div>    
    );
}

export default Games;