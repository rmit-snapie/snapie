import uuidV4 from 'uuid/v4';
export const ADD_BOOK = 'ADD_BOOK';
// dispatcher helping function
export function addBook(book) {
  return {
    type: ADD_BOOK,
    book: {...book, id: uuidV4()},
  };
}
export const REMOVE_BOOK = 'REMOVE_BOOK';

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}
