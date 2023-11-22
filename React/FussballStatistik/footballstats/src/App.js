import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeaguesPage from './Components/LeaguesPage';
import MatchesPage from './Components/MatchesPage';
import MatchPage from './Components/MatchPage';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LeaguesPage />} />
          <Route path="/matches/:leagueShortcut/:leagueSeason" element={<MatchesPage />} />
          <Route path="/match/:matchId" element={<MatchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
