import React, { useState } from 'react';
import './ColorBoxGenerator.css';

const ColorBoxGenerator = () => {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);
  const [error, setError] = useState('');

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setError(''); // Clear error message on input change
  };

  const isValidColor = (color) => {
    const option = document.createElement('div');
    option.style.color = color;
    return option.style.color !== ''; // Check if the color is valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color && isValidColor(color)) {
      setBoxes([...boxes, color]);
      setColor('');
    } else {
      setError('Invalid color name or hex code. Please try again.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={color}
          onChange={handleColorChange}
          placeholder="Enter color name or hex (e.g., #ff0000 or red)"
          required
        />
        <button type="submit">Add Box</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="color-box"
            style={{
              backgroundColor: box,
              width: '100px',
              height: '100px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorBoxGenerator;