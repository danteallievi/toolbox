import { createSlice } from '@reduxjs/toolkit';
import { parseFilesDataForTable } from '../../utils';

export const FilesEmptyState = {
  isLoading: false,
  // Empty states
  files: [],
  filesList: [],
  file: [],
  // Errors
  errorFetchingFiles: false,
  errorFetchingFile: false,
  errorFetchingList: false,
};

const filesSlice = createSlice({
  name: 'files',
  initialState: FilesEmptyState,
  reducers: {
    fetching: (state) => {
      return { ...state, isLoading: true };
    },
    fetchFilesSuccess: (state, { payload }) => {
      return { ...state, isLoading: false, files: parseFilesDataForTable(payload) };
    },
    fetchFilesError: (state) => {
      return { ...state, isLoading: false, errorFetchingFiles: true };
    },
    fetchFileSuccess: (state, { payload }) => {
      return { ...state, isLoading: false, file: parseFilesDataForTable(payload) };
    },
    fetchFileError: (state) => {
      return { ...state, isLoading: false, errorFetchingFile: true };
    },
    fetchListSuccess: (state, { payload }) => {
      return { ...state, isLoading: false, filesList: payload };
    },
    fetchListError: (state) => {
      return { ...state, isLoading: false, errorFetchingList: true };
    },
  }
});

export const {
  fetching,
  fetchFilesSuccess,
  fetchFilesError,
  fetchFileSuccess,
  fetchFileError,
  fetchListSuccess,
  fetchListError
} = filesSlice.actions;
export const { reducer: filesReducer } = filesSlice
