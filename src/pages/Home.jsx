import UpcomingGames from '../components/UpcomingGames'
import StandingsTable from '../components/StandingsTable'
import useFetchStandings from "../Hooks/useFetchStandings";

function Home() {
    const {table} = useFetchStandings()
    return ( 
        <div id="home-ui">
            <UpcomingGames />
            <StandingsTable table={table} />
        </div>
    );
}

export default Home;