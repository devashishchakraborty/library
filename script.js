let myLibrary = [
    {
        title: "Meditations",
        author: "Marcus Aurelius",
        pages: 300,
        read: "No"
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        pages: 250,
        read: "No"
    },
    {
        title: "Beyond Good and Evil",
        author: "Frederich Nietzsche",
        pages: 200,
        read: "No"
    },
    {
        title: "How to Win Friends and Influence People.",
        author: "Dale Carnegie",
        pages: 240,
        read: "No"
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}

function addBookToLibrary() {
    const addBook = document.querySelector(".add-book");
    const form = document.querySelector("form");

    addBook.addEventListener("click", function () {
        form.setAttribute("class", "visible");
    });

    const formSubmit = form.querySelector("button[type='submit']");
    const formClose = form.querySelector("button.close");

    formSubmit.addEventListener("click", function (event) {
        const title = form.querySelector("input[name='title']");
        if (title.value.length !== 0 && author.value.length !== 0 && pages.value.length !== 0){
            const book = new Book(title.value, author.value, pages.value, read.value);
            myLibrary.push(book);
            title.value = "";
            author.value = "";
            pages.value = "";
            form.setAttribute("class", "hidden");
            displayBooks();
            event.preventDefault();
        }
    });
    formClose.addEventListener("click", function(event){
        form.setAttribute("class", "hidden")
    });
}

function displayBooks() {
    grid.textContent = "";
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

const body = document.querySelector(".container");
const grid = document.createElement("div");
grid.setAttribute("class", "grid-container");

addBookToLibrary();
displayBooks();
