let myLibrary = [
    {
        title: "Meditations",
        author: "Marcus Aurelius",
        pages: 300
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        pages: 250
    },
    {
        title: "Beyond Good and Evil",
        author: "Frederich Nietzsche",
        pages: 200
    },
    {
        title: "How to Win Friends and Influence People.",
        author: "Dale Carnegie",
        pages: 240
    }
];

function Book() {

}

function addBookToLibrary() {
    const addBook = document.querySelector(".add-book");
    const form = document.querySelector("form");

    addBook.addEventListener("click", function () {
        form.setAttribute("class", "visible");
    });

    const formSubmit = form.querySelector("button");
    formSubmit.addEventListener("click", function (event) {
        const author = document.querySelector("input#author");
        console.log(author.value);
        // form.setAttribute("class", "hidden");
        event.preventDefault();
    });
}

function displayBooks() {
    const body = document.querySelector(".container")
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid-container");

    for (let book of myLibrary) {

        const gridItem = document.createElement("div");
        gridItem.setAttribute("class", "grid-item");
        grid.appendChild(gridItem);

        for (let attribute in book) {
            const itemProperties = document.createElement("div");
            itemProperties.setAttribute("class", attribute)
            itemProperties.textContent = book[attribute];
            gridItem.appendChild(itemProperties);
        }
        body.appendChild(grid);
    }
}

displayBooks();
addBookToLibrary();