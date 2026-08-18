const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

const myLibrary = [];

function Book(title, author, pages, read) {
    
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;  
}

let inputTitle = document.querySelector('#inp-title').value;


function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
    
    title = inputTitle;
    author = inputTitle;
    pages = inputTitle;
    read = inputTitle;

    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    
    modal.close();
}

