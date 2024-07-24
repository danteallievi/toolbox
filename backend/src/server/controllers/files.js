import { fetchAllFiles, fetchFileData } from '../services/filesServices.js';
import { parseFileData } from '../utils/index.js';

const getFilesList = async (req, res, next) => {
  try {
    const allFiles = await fetchAllFiles();

    return res.status(200).json(allFiles);
  } catch (error) {
    return next(error);
  }

}

const getFiles = async (req, res, next) => {
  const { fileName } = req.query;
  try {
    const allFiles = await fetchAllFiles();
    let processedFiles = [];

    for (const file of allFiles) {
      try {
        const fileContent = await fetchFileData(file);
        const parsedFile = parseFileData(fileContent);

        if (parsedFile) {
          processedFiles = [...processedFiles, parsedFile];
        }
      } catch (error) {
        // console.error(error)
      }
    }

    if (fileName) {
      processedFiles = processedFiles.filter(file => file.file?.includes(fileName));
    }

    return res.status(200).json(processedFiles);
  } catch (error) {
    return next(error);
  }
}

export { getFiles, getFilesList };