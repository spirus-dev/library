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
            displayBook.classList.add('card')
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

const addBook = document.querySelector('#addBook');
addBook.addEventListener('click', function(event){
    event.preventDefault();
    const bookTitle=document.querySelector('#bookTitle');
    const bookAuthor=document.querySelector('#bookAuthor');
    const bookPages=document.querySelector('#bookPages');
    const bookRead=document.querySelector('#bookRead');
    if(bookTitle.value===''||bookAuthor.value===''||bookPages.value===''){
        alert('Please fill the necessary details');
    }
    else{
        addBookToLibrary(bookTitle.value,bookAuthor.value,bookPages.value,bookRead.checked);
        bookTitle.value='';
        bookAuthor.value='';
        bookPages.value='';
        bookRead.checked=false;
        showForm();
    }
});

showLibrary();