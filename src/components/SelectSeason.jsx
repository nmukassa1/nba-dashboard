import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchStandings from "../Hooks/useFetchStandings-1";
import useScrollToTop from "../Hooks/useScrollTopTop";

function SelectSeason() {
    
    const {setSearchParams} = useFetchStandings()
    const {scrollToTop} = useScrollToTop()

    const params = useSearchParams();

    const [season, setSeason] = useState(2023)
    const [selectedYear, setSelectedYear] = useState(season)

    //Update browser url parameters
    const updateParameters = (e) => {
        const value = e.target.value;
        setSelectedYear(value)
        setSearchParams('season=' + value)
        scrollToTop()
    }

    return ( 
        <select id="season-selection" name="year" onChange={updateParameters} vlaue={selectedYear}>
            <option value="2023">2023-2024</option>
            <option value="2022">2022-2023</option>
            <option value="2021">2021-2022</option>
            <option value="2020">2020-2021</option>
            <option value="2019">2019-2020</option>s
        </select>
    );
}

export default SelectSeason;