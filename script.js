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

});

    

const myLibrary = [];

myLibrary.push({
    title: 'Nujabes Jazzy Life',
    author: 'Kero Uno',
    pages: '242',
    read: true
},
{
    title: 'Nujabes Jazzy Life',
    author: 'Kero Uno',
    pages: '242',
    read: true

});

//Container of rendered cards
const cardsBox = document.querySelector('.cards-box');
//------

function displayBooks () {

    myLibrary.forEach((obj) => {

        //Render BG of each obj
        const cardsBackground = document.createElement('div');
        cardsBackground.className = 'cardsBackground';
        //------
        
        //Render title of each obj
        const title = document.createElement('h1');
        title.textContent = obj.title;
        //------

        //Hierarchy
        cardsBox.appendChild(cardsBackground);
            cardsBackground.appendChild(title);
        //------

        
    });
    
    
}


displayBooks();


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

    newBook.id = crypto.randomUUID();

    myLibrary.push(newBook);

    
   

}

