import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import GlobalSearch from './components/GlobalSearch/GlobalSearch';
import FilterTabs from './components/FilterTabs/FilterTabs';
import TilesContainer from './components/TilesContainer/TilesContainer';
import Footer from './components/Footer/Footer';
import Notifications from './components/Notifications/Notifications';
import CreateTileModal from './components/CreateTileModal/CreateTileModal';
import { FILTER_TABS, TILES, NOTIFICATIONS } from './mocks/testData';
import background1 from './assets/backgrounds/background1.png';
import background2 from './assets/backgrounds/background2.png';
import background3 from './assets/backgrounds/background3.png';


function App() {
  const [background, setBackground] = useState(null);
  const [filterValue, updateFilterValue] = useState('all');
  const [tiles, updateTiles] = useState(TILES);
  const [isCreateModalOpen, updateCreateModalStatus] = useState(false);

  useEffect(() => {
    const backgrounds = [background1, background2, background3];
    setBackground({ backgroundImage: `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`});
  }, []);

  return (
    <div style={background} className="App">
      {NOTIFICATIONS.length && <Notifications notifications={NOTIFICATIONS}/>}
      <div className="container">
        <Header />
        <GlobalSearch />
        <FilterTabs tabs={FILTER_TABS} filterValue={filterValue} updateFilterValue={updateFilterValue}/>
        <TilesContainer tiles={tiles} filterValue={filterValue} updateCreateModalStatus={updateCreateModalStatus}/>
        <CreateTileModal isCreateModalOpen={isCreateModalOpen} tiles={tiles} updateTiles={updateTiles} updateCreateModalStatus={updateCreateModalStatus}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
