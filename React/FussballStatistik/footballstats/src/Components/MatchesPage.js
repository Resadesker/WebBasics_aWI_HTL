import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MatchesPage = () => {
  const { leagueShortcut, leagueSeason } = useParams();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`https://api.openligadb.de/getmatchdata/${leagueShortcut}/${leagueSeason}`);
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, [leagueShortcut, leagueSeason]);

  return (
    <div>
      <h2>List of Matches</h2>
      <ul>
        {matches.slice().reverse().map((match) => (
          <li key={match.matchId}>
            <Link to={`/match/${match.matchID}`}>
              {match.team1.teamName} vs {match.team2.teamName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesPage;
