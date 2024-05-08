import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from './useFetch-1';

function useFetchStandings() {
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

    // Custom hook to fetch data
    const { data, loading, error } = useFetch(url);

    // Effect to update the query state based on search parameters
    useEffect(() => {
        const currentDate = new Date();
        let currentSeason = currentDate.getFullYear() - 1;
        if (
            parseInt(searchParams.get('season')) > currentSeason ||
            searchParams.get('season') === null
        ) {
            setQuery(currentSeason);
        } else {
            setQuery(
                searchParams.get('season') === null
                    ? currentSeason
                    : parseInt(searchParams.get('season'))
            );
        }
        console.log(searchParams.get('season'));
    }, [searchParams]);

    // Effect to update the URL whenever the query changes
    useEffect(() => {
        setUrl(
            `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${query}`
        );
    }, [query]);

    // Effect to create and sort the table array when data is fetched
    useEffect(() => {
        if (data && data.response && data.response.length > 0) {
            let table = [...data.response];
            // Sort the table in order by where they sit on the table
            table = table.sort((a, b) => a.conference.rank - b.conference.rank);
            // Extract standings for eastern & western conference
            const eastern = table.filter((item) => item.conference.name === 'east');
            const western = table.filter((item) => item.conference.name === 'west');
            table = [...eastern, ...western];
            setTable(table);
            // console.log(data);
        }
        // console.log(data);
    }, [data]);

    // Return the fetched data and query setter function
    return { table, setSearchParams, setQuery };
}

export default useFetchStandings;
