// Main Library Array
let myLibrary = [
    {
        name: "Meditations",
        author: "Marcus Aurelius",
        pages: 300,
        read: true
    },
    {
        name: "Deep Work",
        author: "Cal Newport",
        pages: 250,
        read: false
    },
    {
        name: "Beyond Good and Evil",
        author: "Frederich Nietzsche",
        pages: 200,
        read: false
    },
    {
        name: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        pages: 240,
        read: true
    }
];

// Creating a book Constructor Function
function Book(title, author, pages, read) {
    this.name = title;
    this.author = author;
    this.pages = +pages;
    if (read === "Yes") this.read = true
    else this.read = false
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
        const name = form.querySelector("input[name='name']");

        // Check if Form is Filled
        if (name.value.length !== 0 && author.value.length !== 0 && pages.value.length !== 0) {
            const book = new Book(name.value, author.value, pages.value, read.value);
            myLibrary.push(book);   // Adding the Object to library array

            name.value = "";
            author.value = "";
            pages.value = "";
            overlay.classList.add("hidden");    // Hide the form

            // Executing the functions again after adding book
            displayBooks();
            displayDescription();
            toggleReadButton();

            event.preventDefault();
        }
    });

    // Event Listener for the close button
    formClose.addEventListener("click", function (event) {
        overlay.classList.add("hidden");
    });
}

function removeBookFromLibrary(){
    const removeButtons = document.querySelectorAll(".grid-item .remove");
    const removeButtonsArray = Array.from(removeButtons);

    removeButtons.forEach(function(button){
        button.addEventListener("click", function(event){
            objectIndex = removeButtonsArray.indexOf(button);
            myLibrary.splice(objectIndex, 1);

            displayDescription(); // Updating the description
            displayBooks(); // display the books after remove one.
        })
    });

}

function displayBooks() {
    const body = document.querySelector(".book-container");
    body.textContent = "";

    const grid = document.createElement("div");
    grid.setAttribute("class", "grid-container");

    for (let book of myLibrary) {
        const gridItem = document.createElement("div");
        gridItem.setAttribute("class", "grid-item");
        grid.appendChild(gridItem);

        for (let attribute in book) {
            const itemProperties = document.createElement("div");
            itemProperties.setAttribute("class", attribute);
            // Formatting text in gridItem for each attribute
            if (attribute === "name"){
                itemProperties.textContent = `"${book[attribute]}"`;
            } else if (attribute === "author") {
                itemProperties.textContent = `by ${book[attribute]}`;
            } else if (attribute === "pages") {
                itemProperties.textContent = `${book[attribute]} pages`;
            } else if (attribute === "read"){   // Creating the read and close button
                const readButton = document.createElement("button");
                if (book[attribute]){
                    readButton.setAttribute("read", "true");
                    readButton.textContent = "Read";
                } else{
                    readButton.setAttribute("read", "false")
                    readButton.textContent = "Not Read";
                }
                itemProperties.appendChild(readButton);
            }
            gridItem.appendChild(itemProperties);
        }
        // Creating a remove Book Button
        const removeButton = document.createElement("button");
        removeButton.classList.add("remove");
        removeButton.textContent = "Remove";
        gridItem.appendChild(removeButton);

        body.appendChild(grid);
    }
    // Execute the function after displaying
    removeBookFromLibrary();
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
        if (book.read) count++;
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

function toggleReadButton(){
    const readButtons = document.querySelectorAll(".grid-item .read button");
    const readButtonsArray = Array.from(readButtons);   // Creating an Array from NodeList to change myLibrary

    readButtons.forEach(function(read){
        read.addEventListener("click", function(event){
            const objectIndex = readButtonsArray.indexOf(read); // Finding the Index of the each book Object
            if (read.getAttribute("read") === "true"){
                myLibrary[objectIndex].read = false;    // Setting the read attribute to false after button click
                read.setAttribute("read", "false");
                read.textContent = "Not Read";
            } else{
                myLibrary[objectIndex].read = true; // Setting the read attribute to true
                read.setAttribute("read", "true");
                read.textContent = "Read";
            }
            displayDescription();
        })
    });
}

addBookToLibrary();
displayBooks();
displayDescription();
toggleReadButton();