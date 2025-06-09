
const grid_Holder = document.querySelector('.Grid-Holder');
const navBar_Holder = document.querySelector('.NavBar-Holder')
const bookLibrary = [];

function Book(name,pages,read){
    this.name = name;
    this.pages = pages;
    this.read = function() {return read ? "Read":"Not read yet";}
  };

  function addToLibrary(nameTo,pagesTo,readTo){
    if(bookLibrary.length >= 10){
      return alert("Max books reached")
    }
    const bookCreated = new Book(nameTo,pagesTo,readTo)
    bookCreated.newId = crypto.randomUUID()
    bookLibrary.push(bookCreated)
  };

  function create_Book_object(){
    const mainDiv = document.createElement("div");
    mainDiv.classList = "Book-Object";
    mainDiv.appendChild(document.createElement("img"));

    for(let i = 1; i <= 3; i++){
      mainDiv.appendChild(document.createElement("p"))
    }
    grid_Holder.appendChild(mainDiv);
  }

  function create_Book_holder(){
    const mainDiv = document.createElement("div");
    mainDiv.classList = "Book-Holder";
    mainDiv.appendChild(document.createElement("img"));

    for(let i = 1; i <= 3; i++){
      mainDiv.appendChild(document.createElement("p"))
    }
    navBar_Holder.appendChild(mainDiv);
    }

    

/* pseudo code

  *needs
  -function to create the Book-Object template /
  -function to create the Book-Holder template

  -function to go trought the array
  -function to get the data of the object on at the moment
  
  -function to set the data to te Book-Holder when clicked the book
  -function to set object data to a Book-Object
  -function to clear all the Grid-Holder?
  -function to clear the NavBar-Holder?


  +parameters to take care of
  -for the moment no more than 10 book objects
  -create first the books objects and then set the data 
  or create the book, set the data and then the next one 
  -i dont have images data yet
  -


*/
  create_Book_object()
  create_Book_holder()
/* 
  while(bookLibrary.length <= 9){
    addToLibrary("Harry Photer",250,true)
  console.log(bookLibrary)
  
  console.log("end of code")
  } */

  /* fixes
  -minor fix to overflow now to be hidden so there wont be
  any color issues for the Grid-Holder
  -minor fix to prevent the array holder to be over 10 objects
  */