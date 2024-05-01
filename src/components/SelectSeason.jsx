import { useState } from "react";
import useFetchStandings from "../Hooks/useFetchStandings";

function SelectSeason() {

    const {setQuery} = useFetchStandings()

    const handleNewRequest = (e) => {
        const value = e.target.value;
        setSelectedYear(value)
        setQuery(value)
    }

    const [selectedYear, setSelectedYear] = useState(2023)
    return ( 
        <select name="year" id="" onChange={handleNewRequest} vlaue={selectedYear}>
            <option value="2023">2023-2024</option>
            <option value="2022">2022-2023</option>
        </select>
    );
}

export default SelectSeason;