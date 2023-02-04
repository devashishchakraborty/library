// Main Library Array
let myLibrary = [
    {
        name: "Meditations",
        author: "Marcus Aurelius",
        pages: 300,
        read: "Yes"
    },
    {
        name: "Deep Work",
        author: "Cal Newport",
        pages: 250,
        read: "No"
    },
    {
        name: "Beyond Good and Evil",
        author: "Frederich Nietzsche",
        pages: 200,
        read: "Yes"
    },
    {
        name: "How to Win Friends and Influence People.",
        author: "Dale Carnegie",
        pages: 240,
        read: "No"
    }
];

// Creating a book Constructor Function
function Book(title, author, pages, read) {
    this.name = title;
    this.author = author;
    this.pages = +pages;
    this.read = read;
}

// Adding Books to Library
function addBookToLibrary() {
    const addBook = document.querySelector(".btn-addBook");
    const form = document.querySelector("form.new-book");
    const overlay = document.querySelector(".overlay")

    // Remove hidden class from overlay to make the form visible
    addBook.addEventListener("click", function () {
        overlay.classList.remove("hidden");
    });

    const formSubmit = form.querySelector("button[type='submit']");
    const formClose = form.querySelector("button.close");

    formSubmit.addEventListener("click", function (event) {
        const title = form.querySelector("input[name='title']");

        // Check if Form is Empty
        if (title.value.length !== 0 && author.value.length !== 0 && pages.value.length !== 0) {
            const book = new Book(title.value, author.value, pages.value, read.value);
            myLibrary.push(book);   // Adding the Object to library array

            title.value = "";
            author.value = "";
            pages.value = "";
            overlay.classList.add("hidden");    // Hide the form

            // Executing the functions again after adding book
            displayBooks();
            displayDescription();

            event.preventDefault();
        }
    });

    // Event Listener for the close button
    formClose.addEventListener("click", function (event) {
        overlay.setAttribute("class", "overlay hidden");
    });
}

function displayBooks() {
    const body = document.querySelector(".book-container");
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid-container");

    body.textContent = "";

    for (let book of myLibrary) {
        const gridItem = document.createElement("div");
        gridItem.setAttribute("class", "grid-item");
        grid.appendChild(gridItem);

        for (let attribute in book) {
            const itemProperties = document.createElement("div");
            itemProperties.setAttribute("class", attribute)
            itemProperties.textContent = `${attribute.charAt(0).toUpperCase() + attribute.slice(1)}: ${book[attribute]}`;
            gridItem.appendChild(itemProperties);
        }
        body.appendChild(grid);
    }
}

function displayDescription() {
    const description = document.querySelector(".description");
    const totalBooks = document.createElement("td");
    const totalPages = document.createElement("td");
    const booksRead = document.createElement("td");

    // Reduce functions to count the pages and no. of books read
    let pagesSum = myLibrary.reduce(function (total, book) {
        return total + book.pages;
    }, 0);

    let readCount = myLibrary.reduce(function (count, book) {
        if (book.read === "Yes") count++;
        return count;
    }, 0);

    description.textContent = "";   // Refreshing
    totalBooks.textContent = `Total Books : ${myLibrary.length}`;
    totalPages.textContent = `Total Pages : ${pagesSum}`;
    booksRead.textContent = `Books Read : ${readCount}`;

    description.appendChild(totalBooks);
    description.appendChild(totalPages);
    description.appendChild(booksRead);
}

addBookToLibrary();
displayBooks();
displayDescription();
