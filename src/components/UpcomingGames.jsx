import { useState, useEffect } from "react";
import useFetchGames from "../Hooks/useFetchGames";
import GameCard from "./GameCard";

function UpcomingGames() {
    const {games} = useFetchGames()

    return ( 
       <>
            {games && (
                <div id="games-container" className="container">
                    {games.map((game) => (
                        <GameCard game={game} key={game.id} />
                    ))}
                </div>    
            )}
       </>
    );
}

export default UpcomingGames;