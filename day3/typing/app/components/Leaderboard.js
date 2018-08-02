import React from 'react';
import PropTypes from 'prop-types';
let input;


const Leaderboard = ({highScores}) => {
    return (
    <div>
    <h3>Leaderboard</h3>
    <ul>
    {highScores.sort((a, b) => b.score - a.score).map((ele, i) => <li>{i + 1 + '  ' + ele.name + ': ' + ele.score}</li>)}
    </ul>
    </div>
  );
};

Leaderboard.propTypes = {
    highScores: PropTypes.array
};


export default Leaderboard;

// />
