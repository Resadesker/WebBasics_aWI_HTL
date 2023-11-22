import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LeaguesPage = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await axios.get('https://api.openligadb.de/getavailableleagues');
        setLeagues(response.data);
      } catch (error) {
        console.error('Error fetching leagues:', error);
      }
    };

    fetchLeagues();
  }, []);

  return (
    <div>
      <h2>List of Leagues</h2>
      <ul>
        {leagues.map((league) => (
          <li key={league.leagueId}>
            <Link to={`/matches/${league.leagueShortcut}/${league.leagueSeason}`}>
              {league.leagueName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaguesPage;