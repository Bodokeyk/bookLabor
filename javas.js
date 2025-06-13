
const grid_Holder = document.querySelector('.Grid-Holder');
const navBar_Holder = document.querySelector('.NavBar-Holder')
const bookLibrary = [];

function Book(url,name,pages,read){
    this.url = url
    this.name = name;
    this.pages = pages;
    const readed = () => {return read ? "Read":"Not read yet";}/* 
    Dont know how this worked :p  */
    this.read = readed()
  };

  function addToLibrary(urlTo,nameTo,pagesTo,readTo){
    if(bookLibrary.length >= 10){
      return alert("Max books reached")
    }
    const bookCreated = new Book(urlTo,nameTo,pagesTo,readTo)
    bookLibrary.push(bookCreated)
  };



  
  function create_Book_object(arrayWithProperties){
    const mainDiv = document.createElement("div");
    mainDiv.classList = "Book-Object";
    arrayWithProperties.forEach(element => {
      if(mainDiv.lastChild === null){
        mainDiv.appendChild(document.createElement("img"));
        mainDiv.lastElementChild.setAttribute("src", element)
      }else{
        mainDiv.appendChild(document.createElement("p"))
        mainDiv.lastElementChild.innerHTML = element
      }
      
    });
    
    grid_Holder.appendChild(mainDiv);
  }

  function create_Book_holder(){
    if(navBar_Holder.firstElementChild !== null){
      return
    }
    const mainDiv = document.createElement("div");
    mainDiv.classList = "Book-Holder";
    mainDiv.appendChild(document.createElement("img"));

    for(let i = 1; i <= 3; i++){
      mainDiv.appendChild(document.createElement("p"))
    }
    navBar_Holder.appendChild(mainDiv);
    }




    function trought_array(arrayToGoThought){
      create_Book_holder()

      arrayToGoThought.forEach(element => {
        create_Book_object(Object.values(element))
        element.newId = crypto.randomUUID() /* creating it here but not 
        ideal...might review it later */
      });
    }

/* educational purpose only and repetition */
    for (let index = 1; index <= 10; index++) {
      addToLibrary("nada","harry photer" + index,256,true)
    }
  trought_array(bookLibrary)
