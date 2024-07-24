import { filesReducer, fetching, fetchFilesSuccess, fetchFilesError, fetchFileSuccess, fetchFileError, fetchListSuccess, fetchListError, FilesEmptyState } from '../../../redux/reducer/files.reducer';
import { parseFilesDataForTable } from '../../../utils';

const linesMock = [{ text: 'text', number: 563, hex: 'hex' }];
const mockFilesPayload = [{ file: 'test2.csv', lines: linesMock }];
const mockListPayload = ['test1.csv', 'test2.csv'];

describe('filesReducer', () => {
  it('should handle fetching action', () => {
    const initialState = { ...FilesEmptyState, isLoading: false };

    const action = fetching();
    const newState = filesReducer(initialState, action);

    expect(newState).toStrictEqual({ ...initialState, isLoading: true });
  });

  it('should handle fetchFilesSuccess action', () => {
    const initialState = FilesEmptyState;

    const action = fetchFilesSuccess(mockFilesPayload);
    const parsedData = parseFilesDataForTable(mockFilesPayload);
    const newState = filesReducer(initialState, action);

    expect(newState).toStrictEqual({ ...initialState, isLoading: false, files: parsedData });
  });

  it('should handle fetchFilesError action', () => {
    const initialState = { ...FilesEmptyState, isLoading: true };

    const action = fetchFilesError();
    const newState = filesReducer(initialState, action);

    expect(newState).toStrictEqual({ ...initialState, isLoading: false, errorFetchingFiles: true });
  });

  it('should handle fetchFileSuccess action', () => {
    const initialState = FilesEmptyState;

    const action = fetchFileSuccess(mockFilesPayload);
    const parsedData = parseFilesDataForTable(mockFilesPayload);
    const newState = filesReducer(initialState, action);

    expect(newState).toStrictEqual({ ...initialState, isLoading: false, file: parsedData });
  });

  it('should handle fetchFileError action', () => {
    const initialState = { ...FilesEmptyState, isLoading: true };

    const action = fetchFileError();
    const newState = filesReducer(initialState, action);

    expect(newState).toStrictEqual({ ...initialState, isLoading: false, errorFetchingFile: true });
  });

  it('should handle fetchListSuccess action', () => {
    const initialState = FilesEmptyState;

    const action = fetchListSuccess(mockListPayload);
    const newState = filesReducer(initialState, action);

    expect(newState).toStrictEqual({ ...initialState, isLoading: false, filesList: mockListPayload });
  });

  it('should handle fetchListError action', () => {
    const initialState = { ...FilesEmptyState, isLoading: true };

    const action = fetchListError();
    const newState = filesReducer(initialState, action);

    expect(newState).toStrictEqual({ ...initialState, isLoading: false, errorFetchingList: true });
  });
});
