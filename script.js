let myLibrary = [];

function Book(title,author,pages,isRead) {
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.isRead=isRead;
}

function addBookToLibrary(title,author,pages,isRead) {
  const newBook=new Book(title,author,pages,isRead);
  myLibrary.push(newBook);
  showLibrary();
}

function showLibrary(){
    const bookShelf= document.querySelector('.bookShelf');
    let child = bookShelf.lastElementChild; 
        while (child) {
            bookShelf.removeChild(child);
            child = bookShelf.lastElementChild;
        }
    if(myLibrary.length==0){
        console.log('No books in the library');
    }
    else{
        myLibrary.forEach(book => {
            console.log(`${book.title} by ${book.author}, ${book.pages} pages, ${book.isRead?'read':'not read yet'}`);
            const displayBook= document.createElement('div');
            displayBook.innerText=`${book.title} by ${book.author}, ${book.pages} pages, ${book.isRead?'read':'not read yet'}`;
            bookShelf.appendChild(displayBook);
        });
    }
}

function showForm(e){
    const bookForm=document.querySelector('.bookForm');
    if(bookForm.style.display===""){
        bookForm.style.display="block";
    }
    else{
        bookForm.style.display="";
    }
    
}

const addButton = document.querySelector('#add');
addButton.addEventListener('click',showForm);

showLibrary();