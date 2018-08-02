import React from 'react';
import PropTypes from 'prop-types';
let input;


const InfoBox = ({TimeLeft, score}) => {
    return (
    <div>
    <p>InfoBox</p>
    <p>{TimeLeft.toString()}</p>
    <p>{score.toString()}</p>
    </div>
  );
};

InfoBox.propTypes = {
    TimeLeft: PropTypes.number,
    score: PropTypes.number
};


export default InfoBox;

// />
