import BookItem from "../global/BookItem";

const ListBooks = ({ searchResults, onChangeShelf}) => {
  return (
    <div className="search-books-results">
      {searchResults.length > 0 && (
        <ol className="books-grid">
          {searchResults.map((book) => (
            <BookItem key={book.id} book={book} onChangeShelf={onChangeShelf}/>
          ))}
        </ol>
      )}
    </div>
  );
};

export default ListBooks;
