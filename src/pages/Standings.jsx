import StandingsTable from "../components/StandingsTable";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function Standings() {
    const [standings] = useOutletContext();
    const [table, setTable] = useState([]);

    useEffect(() => {
        if (standings) {
            // Sort the table in order by where they sit on the table
            const tableSorted = standings.response.sort((a, b) => a.conference.rank - b.conference.rank);
            //Extract standings for eastern & western conference
            const eastern = tableSorted.filter((item) => {return item.conference.name === 'east'})
            const western = tableSorted.filter((item) => {return item.conference.name === 'west'})
            console.log(tableSorted); 
            setTable([...eastern, ...western]);
        }
    }, [standings]); // Run effect when standings changes

    return (  
        <div id="standings-ui">
            <StandingsTable table={table} />
        </div> 
    );
}

export default Standings;
