import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faHouse, faBasketball } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return ( 
        <nav id="desktop-navbar">
           <Link to="/">
                <FontAwesomeIcon icon={faHouse} style={{color: "#ffff",}} />
                Home
            </Link>
            <Link to="/standings">
                <FontAwesomeIcon icon={faTable} style={{color: "#ffff",}} />
                Standings
            </Link>
            <Link to="/teams">
                <FontAwesomeIcon icon={faBasketball} style={{color: "#ffff",}} />
                Teams
            </Link>
        </nav> 
     );
}

export default Navbar;