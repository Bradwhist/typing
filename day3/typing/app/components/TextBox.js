import React from 'react';
import PropTypes from 'prop-types';
let input;


const TextBox = ({onInput}) => {
    return (
    <div>
    <p>TEST</p>
    <input type="text"
        value={''}
        ref={node => {input = node;}}
        onChange={() => {onInput(input.value);} }
      />
    </div>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.function
};


export default TextBox;

// />
