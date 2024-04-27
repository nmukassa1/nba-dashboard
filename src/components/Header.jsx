import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

function Header() {
    const [section, setSection] = useState('Home')
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === '/') {
            setSection('Home')
        } else{
            const path = location.pathname.replace('/', '');
            const section = path.charAt(0).toUpperCase() + path.slice(1);
            setSection(section)
        }
    }, [location])
    return ( 
        <header id="main-header" className="border border-2 border-primaryStroke h-[55px] flex items-center pl-5">
            <h1>{section}</h1>
        </header>
    );
}

export default Header;