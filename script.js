const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const addBook = document.querySelector('.add-book');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});


addBook.addEventListener('click', () => {

    addBookToLibrary();
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



function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
    

    title = document.querySelector('.inp-title').value;
    author = document.querySelector('.inp-author').value;
    pages = document.querySelector('.inp-pages').value;
    read = document.querySelector('.inp-read').checked;

    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);

}

