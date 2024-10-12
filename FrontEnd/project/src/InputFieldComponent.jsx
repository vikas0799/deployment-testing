import React, { useState, useEffect } from 'react';

const InputFieldComponent = () => {
  const [inputValue, setInputValue] = useState('');

  // Effect to log previous and new values when inputValue changes
  // useEffect(() => {
  //   console.log('Previous Value:', inputValue);  // Log previous value
  //   console.log('New Value:', inputValue);       // Log new value
  // }, [inputValue]);  // Run the effect whenever inputValue changes

  // Function to handle input change and update state
  const handleInputChange = (event) => {
    console.log(inputValue);
    const newValue = event.target.value;
    console.log('newnew',newValue);
    setInputValue(newValue);  // Update inputValue state
  };

  return (
    <div>
      <h2>Input Field Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default InputFieldComponent;
