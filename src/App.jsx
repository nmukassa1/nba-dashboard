import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import Panel from './components/Panel';
import useFetch from './Hooks/useFetch';

function App() {

  const {standings, gamesUpcoming} = useFetch()
  console.log(gamesUpcoming);
  
  return ( 
    <div id="app" className=''>
      <Panel />
      <main>
        <Header />
          <Outlet context={[standings, gamesUpcoming]} />
      </main>
    </div>
   );
}

export default App;