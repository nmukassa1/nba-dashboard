import useFetch from '../Hooks/useFetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Teams() {

    const {data, fetchData} = useFetch()

    // State to hold the fetched data
    const [teams, setTeams] = useState([]);
   

    useEffect(() => {
        fetchData(`https://api-nba-v1.p.rapidapi.com/teams?league=standard`)
    }, [])
    useEffect(() => {
        {data && 
            filterNbaTeams(data)
        }
    }, [data])

    function filterNbaTeams(data){
        const teams = data.response.filter((team) => team.nbaFranchise === true);
        setTeams(teams)
    }

    return ( 
        <div id="teams-page">
            {teams && (
                <div id='teams-logo-container'>
                    {teams.map((team) => (
                        <Link key={team.code + '-' + team.id} to={`/statistics?id=${team.id}`} className='team-logo' onClick={() => localStorage.setItem('team', JSON.stringify(team))}>
                            <img src={team.logo} alt={`${team.name} logo`} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
     );
}

export default Teams;