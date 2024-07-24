import React from 'react';
import Table from 'react-bootstrap/Table';

const FileTable = ({ data }) => {
  return data.length === 0 ? (
    <h1>No data to show</h1>
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>

      <tbody>
        {data.map((line, index) => (
          <tr key={index}>
            <td>{line.name}</td>
            <td>{line.text}</td>
            <td>{line.number}</td>
            <td>{line.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FileTable;
