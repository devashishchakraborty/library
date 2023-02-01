let myLibrary = [
    {
        name: "Meditations",
        author: "Marcus Aurelius",
        pages: 300
    },
    {
        name: "Deep Work",
        author: "Cal Newport",
        pages: 250
    },
    {
        name: "Beyond Good and Evil",
        author: "Frederich Nietzsche",
        pages: 200
    },
    {
        name: "How to Win Friends and Influence People.",
        author: "Dale Carnegie",
        pages: 240
    }
];

function Book() {

}

function addBookToLibrary() {

}

function displayBooks() {
    const body = document.querySelector("body")
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