import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  //need to add objects to the array of books
  // {{id: 1, title: hunger games}, {id: 2, title: Bonk}}

  //just to grab fetchbooks from books.js
  const { fetchBooks } = useContext(BooksContext);


  //used to update the old info stored in the API
  useEffect(() => {
    fetchBooks();
  }, []);

  

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
    //calls down to child^^
    //BookList calls down to child booklist to send down array of objects with books
  );
}

export default App;

//do not directly mutatle/change/modify arrays or objects (when they are used as a state)