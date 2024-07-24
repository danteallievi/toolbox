import { render, screen } from '@testing-library/react';
import React from 'react';
import useFiles from '../../redux/hooks/useFiles';
import AllFiles from '../../modules/allFiles';

jest.mock('../../redux/hooks/useFiles', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('AllFiles Component', () => {
  it('should display a spinner when isLoading is true', () => {
    useFiles.mockReturnValue({
      fetchFiles: jest.fn(),
      isLoading: true,
      files: []
    });

    render(<AllFiles />);

    expect(screen.getByRole('spinner')).toBeInTheDocument();
  });

  it('should display the FileTable component when isLoading is false', async () => {
    useFiles.mockReturnValue({
      fetchFiles: jest.fn(),
      isLoading: false,
      files: [{ file: 'test2.csv', lines: [{ text: 'text', number: 563, hex: 'hex' }] }]
    });

    render(<AllFiles />);

    const text = screen.getByText('Text');
    expect(text).toBeInTheDocument();
  });

  it('should call fetchFiles on component mount', () => {
    const fetchFiles = jest.fn();
    useFiles.mockReturnValue({
      fetchFiles,
      isLoading: false,
      files: []
    });

    render(<AllFiles />);

    expect(fetchFiles).toHaveBeenCalledTimes(1);
  });
});
