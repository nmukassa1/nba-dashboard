import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "./useFetch";

function useFetchStandings() {
    const {data, fetchData} = useFetch()

    // State to hold the fetched data
    const [table, setTable] = useState([]);

    // Get search parameters from the URL
    const [searchParams, setSearchParams] = useSearchParams();

    // State to hold the query
    const [query, setQuery] = useState();

    // State to hold the URL based on the query
    const [url, setUrl] = useState(
        `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${query}`
    );

    // Effect to update the query state based on search parameters
    useEffect(() => {
        updateQueryState()
    }, [searchParams]);
    useEffect(() => {
        console.log(query);
        setUrl(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${query}`)
    }, [query])
    useEffect(() => {
        fetchData(url)
    }, [url])
    useEffect(() => {
        createTable()
    }, [data])


    function updateQueryState(){
        const searchQuery = parseInt(searchParams.get('season'));
        const currentDate = new Date();
        let currentSeason = currentDate.getFullYear() - 1;
        const lastSeasonFetchable = currentSeason - 5; // Api will only request seasons from up to 6 years
        if (
            searchQuery > currentSeason ||
            searchParams.get('season') === null
        ) {
            setQuery(currentSeason);
        } else if(searchQuery < lastSeasonFetchable){
            setQuery(lastSeasonFetchable);
            // setSearchParams(lastSeasonFetchable)
        }
         else {
            setQuery(searchQuery);
        }
    }

    function createTable(){
        if (data && data.response && data.response.length > 0) {
            let table = [...data.response];
            // Sort the table in order by where they sit on the table
            table = table.sort((a, b) => a.conference.rank - b.conference.rank);
            // Extract standings for eastern & western conference
            const eastern = table.filter((item) => item.conference.name === 'east');
            const western = table.filter((item) => item.conference.name === 'west');
            table = [...eastern, ...western];
            setTable(table);
            // console.log(table);
        }
    }
    return {table, setSearchParams, setQuery};
}

export default useFetchStandings;