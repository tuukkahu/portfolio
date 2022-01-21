import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tile from './components/Tile'
import jsonData from './data/info.json'

function App() {
  const [infos, setInfos] = useState(jsonData)

  return (
    <div className="container">
      <Header />
      <div className="article-grid">
        {infos.map((info) => (
          <Tile key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
}

// Työkokemus
// Osaaminen
// -- Kielet, IT-taidot
// Koulutus
// Harrastukset

export default App;
