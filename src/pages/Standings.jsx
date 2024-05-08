import StandingsTable from "../components/StandingsTable";
import useFetchStandings from "../Hooks/useFetchStandings";
import SelectSeason from "../components/SelectSeason";

function Standings() {
    const {table} = useFetchStandings()

    return (  
        <div id="standings-ui">
            <StandingsTable table={table} />
            <SelectSeason />
        </div> 
    );
}

export default Standings;
