import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MatchPage = () => {
  const { matchId } = useParams();
  const [matchDetails, setMatchDetails] = useState(null);

  useEffect(() => {
    const fetchMatchDetails = async () => {
      try {
        const response = await axios.get(`https://api.openligadb.de/getmatchdata/${matchId}`);
        setMatchDetails(response.data);
      } catch (error) {
        console.error('Error fetching match details:', error);
      }
    };

    fetchMatchDetails();
  }, [matchId]);

  return (
    <div>

      {matchDetails && (

        <div>
          <h2>{matchDetails.team1.teamName} vs {matchDetails.team2.teamName}</h2>
          <h3>{matchDetails.leagueName}</h3>
          {matchDetails.matchResults && matchDetails.matchResults.length > 0 && (
            <h3>
              {matchDetails.matchResults[0].pointsTeam1} - {matchDetails.matchResults[0].pointsTeam2}
            </h3>
          )}
          <p>Date and Time (Local): {matchDetails.matchDateTime}</p>
          <h4>Goals:</h4>
          {matchDetails.goals.length > 0 ? (
            <ul>
              {matchDetails.goals.map((goal, index) => (
                <li key={index}>
                  {goal.matchMinute} Player {goal.goalGetterName} scored for {goal.isPenalty ? 'Penalty' : 'Normal'}.
                </li>
              ))}
            </ul>
          ) : (
            <p>No information.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MatchPage;
