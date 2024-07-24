export class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const isValidNumber = (value) => {
  return !isNaN(value) && Number.isSafeInteger(value);
};

const isValidHex = (value) => {
  const hexPattern = /^[0-9a-fA-F]{32}$/;
  return hexPattern.test(value);
};

export const parseFileData = (fileContent) => {
  let fileName = '';
  const lines = fileContent
    .split('\n') // Divide each line
    .slice(1) // Remove the explanatory first line
    .map(line => {
      const parts = line.split(',');

      fileName = parts[0];
      const text = parts[1];
      const number = parts[2];
      const hex = parts[3];

      if (text && isValidNumber(+number) && isValidHex(hex)) {
        return { text, number: +number, hex };
      }

    })
    .filter(item => !!item)

  if (lines.length) {
    return {
      file: fileName,
      lines
    };
  }
};