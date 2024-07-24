import axios from 'axios'

import { fetching, fetchFilesSuccess, fetchFilesError, fetchFileSuccess, fetchFileError, fetchListError, fetchListSuccess } from "../reducer/files.reducer";

const apiUrl = 'http://localhost:8080';

export const fetchFilesThunk = () => async (dispatch) => {
  dispatch(fetching())
  try {
    const { data } = await axios.get(`${apiUrl}/files/data`,
      { headers: { Authorization: `Bearer ${/* Should read from localStorage or sth like that */ 'aSuperSecretKey'}` } }
    );

    dispatch(fetchFilesSuccess(data));
  } catch (error) {
    dispatch(fetchFilesError())
  }
};

export const fetchFileThunk = (fileName) => async (dispatch) => {
  dispatch(fetching())
  try {
    const { data } = await axios.get(`${apiUrl}/files/data?fileName=${fileName}`,
      { headers: { Authorization: `Bearer ${/* Should read from localStorage or sth like that */ 'aSuperSecretKey'}` } }
    );

    dispatch(fetchFileSuccess(data));
  } catch (error) {
    dispatch(fetchFileError())
  }
};

export const fetchFilesListThunk = () => async (dispatch) => {
  dispatch(fetching())
  try {
    const { data } = await axios.get(`${apiUrl}/files/list`,
      { headers: { Authorization: `Bearer ${/* Should read from localStorage or sth like that */ 'aSuperSecretKey'}` } }
    );

    dispatch(fetchListSuccess(data));
  } catch (error) {
    dispatch(fetchListError())
  }
};
