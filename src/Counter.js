import React, { useState } from 'react';

const Counter = (props) => {
  const [state, onStateChange] = useState({ count: 0 });

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => onStateChange({ count: state.count + 1 })}>
        +
      </button>
      <div>{state.count}</div>
      <button onClick={() => onStateChange({ count: state.count - 1 })}>
        -
      </button>
    </div>
  );
};

export default Counter;
