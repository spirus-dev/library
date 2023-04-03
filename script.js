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
        const noBook=document.createElement('div');
        noBook.className='noBook';
        noBook.innerText='No Books Available';
        bookShelf.appendChild(noBook);
    }
    else{
        let index=0;
        myLibrary.forEach(book => {
            const displayBook= document.createElement('div');

            const bookTitle=document.createElement('div')
            bookTitle.classList.add('bookTitle');
            bookTitle.innerHTML=`<span class="cardHeader">Book Title</span> : ${book.title}`;

            const bookAuthor=document.createElement('div')
            bookAuthor.classList.add('bookAuthor');
            bookAuthor.innerHTML=`<span class="cardHeader">Book Author</span> : ${book.author}`;

            const bookPages=document.createElement('div')
            bookPages.classList.add('bookPages');
            bookPages.innerHTML=`<span class="cardHeader">Book Pages</span> : ${book.pages}`;

            const bookRead=document.createElement('div')
            bookRead.classList.add('bookRead');
            bookRead.innerHTML=`<span class="cardHeader">Finished Reading?</span> : ${book.isRead}`;

            const readButton=document.createElement('button');
            readButton.classList.add('readButton');
            readButton.dataset.index=`${index}`;
            readButton.innerText='Read';

            const deleteButton=document.createElement('button');
            deleteButton.classList.add('deleteButton');
            deleteButton.innerText='Delete';
            deleteButton.dataset.index=`${index}`;

            displayBook.appendChild(bookTitle);
            displayBook.appendChild(bookAuthor);
            displayBook.appendChild(bookPages);
            displayBook.appendChild(bookRead);
            displayBook.appendChild(readButton);
            displayBook.appendChild(deleteButton);
            displayBook.classList.add('card')
            bookShelf.appendChild(displayBook);
            index++;
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

const bookShelf=document.querySelector('.bookShelf');
bookShelf.addEventListener('click',function(event){
    let targetElement= event.target;
    if(targetElement.className==="deleteButton"){
        let index=Number(targetElement.dataset.index);
        let removedTitle=myLibrary[index].title;
        let removed=myLibrary.splice(index,1);
        alert(`Book named "${removedTitle}" is removed from the library`);
        showLibrary();
    }
    else if(targetElement.className==="readButton"){
        let index=Number(targetElement.dataset.index);
        let readStatus=myLibrary[index].isRead;
        if(readStatus===true){
            myLibrary[index].isRead=false;
        }
        else{
            myLibrary[index].isRead=true;
        }
        showLibrary()
    }
});

showLibrary();