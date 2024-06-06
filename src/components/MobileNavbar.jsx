import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faHouse, faBasketball } from '@fortawesome/free-solid-svg-icons'

function MobileNavbar() {
    return ( 
        <nav id="mobile-navbar">
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} />
                Home
            </Link>
            <Link to="/standings">
                <FontAwesomeIcon icon={faTable} style={{color: "#ffffff",}} />
                Standings
            </Link>
            <Link to="/teams">
                <FontAwesomeIcon icon={faBasketball} style={{color: "#ffffff",}} />
                Teams
            </Link>
        </nav> 
    );
}

export default MobileNavbar;