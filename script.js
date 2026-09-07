const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const addBookButton = document.querySelector('.add-book');
const form = document.querySelector('form')



openModal.addEventListener('click', () => {
    modal.showModal();
 
});

closeModal.addEventListener('click', () => {

    modal.close();
    
});





    

const myLibrary = [];



//Container of rendered cards
const cardsBox = document.querySelector('.cards-box');
//------

function renderBooks () {

    //Clear the container of rendered cards
    cardsBox.replaceChildren();
    
    myLibrary.forEach((obj) => {
       
        

        //Render BG of each obj
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'cardsBackground';
        
        cardsContainer.setAttribute('data-attribute', `${obj.id}`); //Create attribute and object id as its value. Needed for deletion of card
        //------
        
        //Render title of each obj
        const title = document.createElement('h2');
        title.textContent = obj.title;
        //------

        //Render author of each obj
        const author = document.createElement('p');
        author.textContent = obj.author;
        author.id = "authorID";
        //------

        //Render pages of each obj
        const pages = document.createElement('p');
        pages.textContent = obj.pages;
        pages.textContent += ' pages';
        pages.id = "pagesID";
        //------


        //Render read toggle checkbox

        const label = document.createElement('label');
        label.textContent = 'Already Read? '
        label.setAttribute('for', 'cbox');
      
        const read = document.createElement('input');
        read.type = 'checkbox';
        read.id = 'cbox'

      
       

        if (obj.read === true) {
            read.checked = true;
        } else {
           read.checked = false;
        }
        
    
        read.addEventListener('click', function() {
            obj.toggleReadStatus();

        });

        

        //Render delete button of each obj
        const deleteCard = document.createElement('button');
        deleteCard.textContent = 'Delete';
        //------

        //Logic for deleting a card upon clicking the delete button
        const attribute = cardsContainer.getAttribute('data-attribute');

        deleteCard.addEventListener('click', function() {
            const index = myLibrary.indexOf(obj);

            if (attribute === obj.id) {
                cardsBox.removeChild(cardsContainer);
                myLibrary.splice(index, 1);
            };
        });
        //------

        //Hierarchy
        cardsBox.appendChild(cardsContainer);
            cardsContainer.appendChild(title);
            cardsContainer.appendChild(author);
            cardsContainer.appendChild(pages);
            cardsContainer.appendChild(label);
            label.appendChild(read);
            cardsContainer.appendChild(deleteCard);
            
        //------
        
        
        });

    
    
};

myLibrary.push({
    title: 'Nujabes Jazzy Life',
    author: 'Kero Uno',
    pages: '242',
    read: true
},
{
    title: 'Plik Plok',
    author: 'Jahseh Bonfrog',
    pages: '420',
    read: true
});

renderBooks();


Book.prototype.toggleReadStatus = function(){
    this.read = !this.read;
    
};


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
    // newBook.setRead(); 
    newBook.id = crypto.randomUUID();

    myLibrary.push(newBook);

}



form.addEventListener('submit', function(e) {
        e.preventDefault();

    addBookToLibrary();
    renderBooks();
    modal.close();
});

