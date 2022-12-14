import BookItem from "../global/BookItem";

const ShelfItems = ({ book, onChangeShelf }) => {
  return (
    <ol className="books-grid">
      {book.map((book) => (
        <BookItem key={book.id} book={book} onChangeShelf={onChangeShelf} />
      ))}
    </ol>
  );
};

export default ShelfItems;
