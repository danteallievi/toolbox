import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import useFiles from '../../redux/hooks/useFiles';
import Element from '../../modules/element';

jest.mock('../../redux/hooks/useFiles', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('Element Component', () => {
  it('should display a spinner when isLoading is true', () => {
    useFiles.mockReturnValue({
      fetchFile: jest.fn(),
      fetchFilesList: jest.fn(),
      isLoading: true,
      filesList: [],
      file: []
    });

    render(<Element />);

    expect(screen.getByRole('spinner')).toBeInTheDocument();
  });

  it('should display file names and handle click events', () => {
    const fetchFile = jest.fn();
    useFiles.mockReturnValue({
      fetchFile,
      fetchFilesList: jest.fn(),
      isLoading: false,
      filesList: ['test1.csv', 'test2.csv'],
      file: []
    });

    render(<Element />);

    expect(screen.getByText('test1.csv')).toBeInTheDocument();
    expect(screen.getByText('test2.csv')).toBeInTheDocument();

    fireEvent.click(screen.getByText('test1.csv'));
    expect(fetchFile).toHaveBeenCalledWith('test1.csv');
  });

  it('should display the FileTable component when isLoading is false', async () => {
    useFiles.mockReturnValue({
      fetchFile: jest.fn(),
      fetchFilesList: jest.fn(),
      isLoading: false,
      filesList: [],
      file: [{ text: 'some text', number: 123, hex: 'somehex' }]
    });

    render(<Element />);

    expect(screen.getByText('some text')).toBeInTheDocument();
  });

  it('should call fetchFilesList on component mount', () => {
    const fetchFilesList = jest.fn();
    useFiles.mockReturnValue({
      fetchFile: jest.fn(),
      fetchFilesList,
      isLoading: false,
      filesList: [],
      file: []
    });

    render(<Element />);

    expect(fetchFilesList).toHaveBeenCalledTimes(1);
  });
});
