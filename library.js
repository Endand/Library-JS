const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    const readStatus = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

//for testing
function addSampleBooks() {
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
  addBookToLibrary("1984", "George Orwell", 328, true);
  addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
  addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
}

function displayBooks() {
  const container = document.getElementById("library-container");
  container.innerHTML = ""; // Clear previous content

  for (const book of myLibrary) {
    // Create card div
    const bookCard = document.createElement("div");
    bookCard.id = book.id;
    bookCard.className = "book-card";

    // Add book info
    const title = document.createElement("h3");
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pages);

    const readStatus = document.createElement("p");
    readStatus.textContent = `Status: ${book.read ? "Read" : "Not read yet"}`;
    bookCard.appendChild(readStatus);

    //Append read toggle button
    const readToggleButton = document.createElement("button");
    readToggleButton.textContent = "Toggle Read";
    readToggleButton.addEventListener("click", () => {
      book.read = !book.read;
      displayBooks();
    });
    bookCard.appendChild(readToggleButton);

    // Append card to container
    container.appendChild(bookCard);
  }
}

addSampleBooks();
displayBooks();
