export const parseFilesDataForTable = (data) =>
  data.flatMap(fileData => fileData.lines.map(line => ({ ...line, name: fileData.file })));