import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import SearchEngine from './components/SearchEngine'
import Data from './api/data';
import Fetchdatajson from './api/Fetchdatajson';
function App() {
  return (
    <div className=''>
      <Fetchdatajson />
     

    </div>

  );
}

export default App;
