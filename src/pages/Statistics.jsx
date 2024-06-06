import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

function Statistics({}) {

    const currentDate = new Date();
    let currentSeason = currentDate.getFullYear() - 1;

    const teamInfo = JSON.parse(localStorage.getItem('team'))
    // const teamInfo = useRef(JSON.parse(localStorage.getItem('team')))
    console.log(teamInfo)

    const {data, fetchData} = useFetch()

    // State to hold a teams statistics when requested
    const [teamStats, setTeamsStats] = useState([]);

    // Get search parameters from the URL
    const [searchParams, setSearchParams] = useSearchParams();

    // State to hold the query
    const [query, setQuery] = useState();

    // State to hold the URL based on the query
    const [url, setUrl] = useState(`https://api-nba-v1.p.rapidapi.com/teams/statistics?id1=&season=${currentSeason}`);

    useEffect(() => {
        updateQueryState()
    }, [searchParams]);

    useEffect(() => {
        setUrl(`https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${query}&season=${currentSeason}`)
    }, [query])

    useEffect(() => {
        fetchData(url)
    }, [url])
    useEffect(() => {
        {data && 
            setTeamsStats(data.response)
        }
    }, [data])
    useEffect(() => {
        console.log(teamStats);
    }, [teamStats])



    function updateQueryState(){
        const searchQuery = parseInt(searchParams.get('id'));
        setQuery(searchQuery);
    }

    return ( 
        <div id="statistics-page">
            {teamStats && teamInfo &&(
               <div id="team-stats-banner">
                    <div id="team-stats-logo">
                        <img src={teamInfo.logo} alt="" />
                    </div>
                    <h1>{teamInfo.name}</h1>
               </div>
            )}
        </div>
     );
}

export default Statistics;