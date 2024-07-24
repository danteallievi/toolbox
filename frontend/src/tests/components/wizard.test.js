import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Wizard from '../../components/wizard/wizard';

describe('Wizard Component', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('should display a title', () => {
    render(<Wizard options={mockOptions} selectedOption="" setSelectedOption={() => { }} />);

    expect(screen.getByText('What you would like to see')).toBeInTheDocument();
  });

  it('should display all options in the select dropdown', () => {
    render(<Wizard options={mockOptions} selectedOption="" setSelectedOption={() => { }} />);

    mockOptions.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('should call setSelectedOption with the selected value when an option is selected', () => {
    const setSelectedOption = jest.fn();
    render(<Wizard options={mockOptions} selectedOption="" setSelectedOption={setSelectedOption} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'option2' } });

    expect(setSelectedOption).toHaveBeenCalledWith('option2');
  });

  it('should have the correct option selected based on selectedOption prop', () => {
    render(<Wizard options={mockOptions} selectedOption="option2" setSelectedOption={() => { }} />);

    expect(screen.getByRole('combobox')).toHaveValue('option2');
  });
});
