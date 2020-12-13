class BookModel {
  constructor(bookData, onChangeShelf) {
    this.id = bookData.id;
    this.imageUrl = (bookData.imageLinks && bookData.imageLinks.thumbnail) || '';
    this.title = bookData.title;
    this.authors = bookData.authors || [''];
    this.shelf = bookData.shelf || '';
    this.onChangeShelf = (self) => onChangeShelf(this, self);
  }

  get formattedAuthors() {
    return this.authors.reduceRight((acc, author) => `${acc}, ${author}`);
  }
}

export default BookModel;