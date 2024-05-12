import Games from '../components/Games'
import StandingsTable from '../components/StandingsTable'
import useFetchStandings from "../Hooks/useFetchStandings";

function Home() {
    const {table} = useFetchStandings()
    return ( 
        <div id="home-ui">
            <Games />
            <StandingsTable table={table} />
        </div>
    );
}

export default Home;