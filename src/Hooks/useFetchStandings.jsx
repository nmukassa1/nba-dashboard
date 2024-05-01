import {useState, useEffect} from 'react'
import { useSearchParams } from "react-router-dom";
import useFetch from './useFetch';

function useFetchStandings() {

    const [table, setTable] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(); // State to hold the query 
    const [url, setUrl] = useState(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${query}`); // State to hold the URL based on query
    const { data, loading, error } = useFetch(url);

    // Get search query & update query state
    useEffect(() => {
        const currentDate = new Date();
        let currentSeason = currentDate.getFullYear() - 1;
        if(parseInt(searchParams.get('season')) > currentSeason || searchParams.get('season') === null){
            setQuery(currentSeason)
        } else{
            setQuery(searchParams.get('season') === null ? currentSeason : parseInt(searchParams.get('season')))
        }
    }, [searchParams]);

    // Set the url state on every query state changes
    // This then triggers useFetch to run
    useEffect(() => {
        // // Update the URL whenever the query changes
        setUrl(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${query}`);
        // console.log(query);
    }, [query])
    
    // Creates & sorts the table array
    useEffect(() => {
        if (data && data.response && data.response.length > 0) {
            let table = [...data.response];
            // Sort the table in order by where they sit on the table
            table = table.sort((a, b) => a.conference.rank - b.conference.rank);
            //Extract standings for eastern & western conference
            const eastern = table.filter((item) => item.conference.name === 'east');
            const western = table.filter((item) => item.conference.name === 'west');
            table = [...eastern, ...western];
            setTable(table)
            // console.log(table); 
        }
    }, [data]);

    return {table, data, setQuery};
}

export default useFetchStandings;