import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import Panel from './components/Panel';
import MobileNavbar from './components/MobileNavbar';

function App() {

  // const {standings, gamesUpcoming} = useFetch()
  
  return ( 
    <div id="app" className=''>
        <Header />
      <main>
          <Outlet  />
      </main>
      <MobileNavbar />
    </div>
   );
}

export default App;