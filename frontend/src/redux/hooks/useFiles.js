import { useDispatch, useSelector } from 'react-redux';
import { fetchFilesListThunk, fetchFilesThunk, fetchFileThunk } from '../thunks';
import { useCallback } from 'react';

const useFiles = () => {
  const dispatch = useDispatch();
  const filesReducer = useSelector((store) => store.files);
  const { isLoading, files, filesList, file } = filesReducer;

  const fetchFiles = useCallback((receivedUser) => {
    dispatch(fetchFilesThunk(receivedUser));
  }, [dispatch])

  const fetchFile = useCallback((receivedUser) => {
    dispatch(fetchFileThunk(receivedUser));
  }, [dispatch])

  const fetchFilesList = useCallback((receivedUser) => {
    dispatch(fetchFilesListThunk(receivedUser));
  }, [dispatch])

  return {
    fetchFile,
    fetchFiles,
    fetchFilesList,
    isLoading,
    files,
    filesList,
    file
  };
};

export default useFiles;