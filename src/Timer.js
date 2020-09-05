import React, { useState, useEffect, Component } from 'react';

const Timer = (props) => {
  const [secondsElapsed, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [secondsElapsed]);

  return <p>{secondsElapsed} seconds elapsed</p>;
};

const ToggleComponent = (props) => {
  const [showTimer, setTimer] = useState(true);

  const handleClick = () => {
    setTimer(false);
  };

  if (!showTimer) {
    return <p>Done!</p>;
  }

  return (
    <div>
      <Timer />
      <button onClick={handleClick}>turn off timer</button>
    </div>
  );
};

export default ToggleComponent;
