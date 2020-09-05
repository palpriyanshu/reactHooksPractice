import React, { useState } from 'react';

const Input = (props) => {
  const [state, setValue] = useState({ value: '' });

  const handleChange = (e) => {
    const value = e.target.value;
    setValue({ value });
    props.onChange(value);
  };

  return (
    <div>
      <input value={state.value} onChange={handleChange} />
    </div>
  );
};

export default Input;
