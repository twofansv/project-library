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

//REFERENCE DOM
const cardsBox = document.querySelector('.cards-box');

//DOM CREATION



addBook.addEventListener('click', () => { 

    addBookToLibrary();
    displayBooks();
    modal.close();
});

    

const myLibrary = [];




function displayBooks () {

    const cardDiv = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardAuthor = document.createElement('p');
    const cardPages = document.createElement('p');
    const cardLabel = document.createElement('label');
    const cardRead = document.createElement('input');
   

    cardDiv.className = 'cards';
    cardLabel.id = 'label-read';
    

    cardRead.type = 'checkbox';
    cardRead.id = 'card-read';
    
    myLibrary.forEach (function (obj) {
        
        cardTitle.textContent = obj.title;
        cardAuthor.textContent = obj.author;
        cardPages.textContent = obj.pages;

        

        cardsBox.appendChild(cardDiv);
        cardDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardAuthor);
        cardDiv.appendChild(cardPages);
        cardDiv.appendChild(cardLabel);
        cardDiv.appendChild(cardRead);

        
    });
}

cardRead.addEventListener('click', function() {
    setRead();
    myLibrary
});

Book.prototype.setRead = function() {

    // IDK IF TAMA BA NA SA LOOB TONG setAttribute DITO SA PROTOTYPE  
    if (this.read == 'true') {
        cardRead.setAttribute('data-read', 'read');

    }
    else {
        cardRead.setAttribute('data-read', 'unread');
    }

    //SETS THE OBJECT READ VALUE
    if (data-read == 'true') {
        this.read = true;
    }
    else {
        this.read = false;
    }


}



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

