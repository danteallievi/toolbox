import React from 'react';
import Form from 'react-bootstrap/Form';

const Wizard = ({ options, selectedOption, setSelectedOption }) => {
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <h1>What you would like to see</h1>

      <Form.Select aria-label='Default select example' value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default Wizard;
