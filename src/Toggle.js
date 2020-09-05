import React, { useState } from 'react';

const Toggle = (props) => {
  const [isButtonOn, onStateChange] = useState(false);
  return (
    <button onClick={() => onStateChange(!isButtonOn)}>
      {isButtonOn ? 'turn on' : 'turn off'}
    </button>
  );
};

export default Toggle;
