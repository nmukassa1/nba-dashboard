import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";

function Games() {
    const [standings, gamesUpcoming] = useOutletContext();
    const [games, setGames] = useState([]);

    useEffect(() => {
        if (gamesUpcoming) {
            const arr = gamesUpcoming.response;
            const sort = arr.sort((a, b) => b.date.start - a.date.start)
            setGames(gamesUpcoming.response)
            console.log(sort);
        }
    }, [gamesUpcoming]); // Run effect when standings changes

    return ( 
        <div id="games-ui">
            {games.length > 0 && (
                games.map((game) => (
                    <GameCard game={game} standings={standings} />
                ))
            )}
        </div>    
    );
}

export default Games;