import React, { useEffect } from 'react';

import { Row, Spinner } from 'react-bootstrap';
import FileTable from '../components/table/table';
import useFiles from '../redux/hooks/useFiles';

const AllFiles = () => {
  const { fetchFiles, isLoading, files } = useFiles();

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <Row className='justify-content-center align-items-center min-vh-100'>
      {isLoading ? <Spinner variant='primary' role='spinner' /> : <FileTable data={files} />}
    </Row>
  );
};

export default AllFiles;
