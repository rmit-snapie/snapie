- set up:
  nodejs
  create-react-native-app
- [] helloworld
  create-react-native-app helloworld

* [] redux with react native

- init, npm i redux react-redux --save
- create a folder called src, and add Books.js and actions.js, bookReducer.js and index.js
- app.js provider...
- book.js
  actions,
  const mapStateToProps = state => ({books: state.bookReducer.books});
  const mapDispatchToProps = {dispatchAddBook: book => addBook(book)};
  export default connect(mapStateToProps, mapDispatchToProps)(Books)
