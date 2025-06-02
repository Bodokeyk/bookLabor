const bookLibrary = []

function Book(name,pages,read){
    this.name = name;
    this.pages = pages;
    this.read = function() {return read ? "Read":"not read yet";}
  };

  function addToLibrary(nameTo,pagesTo,readTo){
    let bookCreated = new Book(nameTo,pagesTo,readTo)
    bookCreated.newId = crypto.randomUUID()
    bookLibrary.push(bookCreated)
  };

  addToLibrary("Harry Photer",250,true)
  console.log(bookLibrary)
  
  console.log("end of code")