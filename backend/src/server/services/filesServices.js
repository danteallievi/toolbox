import axios from 'axios';

import { EXTERNAL_BASE_API_URL } from '../constants/index.js';

export const PrivateFetch = axios.create({
  baseURL: `${EXTERNAL_BASE_API_URL}`,
  timeout: 5000,
});

PrivateFetch.interceptors.request.use((config) => {
  const newConfig = { ...config };
  newConfig.headers.authorization = `Bearer ${process.env.SECRET_KEY || 'aSuperSecretKey'}`;
  return newConfig;
});


export const fetchAllFiles = async () => {
  try {
    const { data } = await PrivateFetch.get(`/files`)

    return data.files
  }
  catch (error) {
    return error
  }
}

export const fetchFileData = async (fileName) => {
  try {
    const { data: file } = await PrivateFetch.get(`/file/${fileName}`);
    return file
  } catch (error) {
    return error;
  }
}
