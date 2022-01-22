import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Tile from './components/Tile'
import jsonData from './data/info.json'

function App() {
  const [infos, setInfos] = useState(jsonData)

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' exact element = {
            <div className="article-grid">
              {infos.map((info) => (
                <Tile key={info.id} info={info} />
              ))}
            </div>
          } />
        </Routes>
      </div>
    </Router> 
  );
}

// Työkokemus
// Osaaminen
// -- Kielet, IT-taidot
// Koulutus
// Harrastukset

export default App;
