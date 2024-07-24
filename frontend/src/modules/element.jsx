import React, { useEffect } from 'react';

import { Row, Spinner } from 'react-bootstrap';
import FileTable from '../components/table/table';
import useFiles from '../redux/hooks/useFiles';

const Element = () => {
  const { fetchFile, fetchFilesList, isLoading, filesList, file } = useFiles();

  const handleElementClick = (fileName) => {
    fetchFile(fileName);
  };

  useEffect(() => {
    fetchFilesList();
  }, []);

  return (
    <>
      <div className='d-flex flex-wrap'>
        {filesList.map((fileName) => (
          <p
            key={fileName}
            onClick={() => handleElementClick(fileName)}
            className='m-2 p-2 border rounded cursor-pointer hover:bg-light'
            style={{ cursor: 'pointer' }}
          >
            {fileName}
          </p>
        ))}
      </div>
      <Row className='justify-content-center align-items-center '>
        {isLoading ? <Spinner variant='primary' role='spinner' /> : <FileTable data={file} />}
      </Row>
    </>
  );
};

export default Element;
