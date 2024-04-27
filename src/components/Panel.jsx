import {Link} from 'react-router-dom'

function Panel() {

    const links = document.querySelectorAll('nav a');

    links.forEach((link) => {
        // link.addEventListener('click', (e) => handleActiveState(e, link));
        // link.addEventListener('hover', (link) => {
        //     alert(3)
        // });
    });

    function handleActiveState(e, clickedLink) {
        // Remove active state from all links
        links.forEach((link) => {
            link.style.background = '';
        });

        // Set the background color of the clicked link
        clickedLink.style.backgroundColor = '#3F3F3F';
    }


    return ( 
        <div id="panel">
            <header>
                <h1>NBA</h1>
            </header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/standings">Standings</Link>
                <Link to="/games">Games</Link>
            </nav>
        </div>
     );
}

export default Panel;