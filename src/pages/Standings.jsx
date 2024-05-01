import StandingsTable from "../components/StandingsTable";
import { useOutletContext, useSearchParams } from "react-router-dom";
// import useFetch from "../Hooks/useFetch";
import useFetchStandings from "../Hooks/useFetchStandings";
import SelectSeason from "../components/SelectSeason";
import { useEffect } from "react";

function Standings() {
    const {table, data} = useFetchStandings()

    useEffect(() => {
        console.log(table);
    }, [data])

    return (  
        <div id="standings-ui">
            <StandingsTable table={table} />
            <SelectSeason />
        </div> 
    );
}

export default Standings;
