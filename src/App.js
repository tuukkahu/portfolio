import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Card from './components/Tile'
import jsonData from './data/info.json'

function App() {
  const infos = useState(jsonData)[0]

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' exact element = {
            <div className="article-grid">
              {infos.map((info) => (
                <Card key={info.id} info={info} />
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

// Continue: 
// https://youtu.be/5DEq5cWNYt8?t=2061

export default App;
