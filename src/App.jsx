import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import Panel from './components/Panel';
import MobileNavbar from './components/MobileNavbar';
import DesktopNavbar from './components/DesktopNavbar';

function App() {

  // const {standings, gamesUpcoming} = useFetch()
  
  return ( 
    <div id="app" className=''>
      <section>
        <Header />
        <DesktopNavbar />
      </section>
      <main>
          <Outlet  />
      </main>
      <MobileNavbar />
    </div>
   );
}

export default App;