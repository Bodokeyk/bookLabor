
const grid_Holder = document.querySelector('.Grid-Holder');
const navBar_Book = document.querySelector('.Book-Holder')
const addBookButton= document.querySelector('.button-AddBook')
const closeAddBookDialog= document.querySelector('.dialog-cancel-button')
const formSubmit = document.getElementById('form-Data')
const bookLibrary = new Map();

function Book(url,name,pages,read){
    const urlFalse = () => url ? url:"Books images/book-2-svgrepo-com.svg"
    this.url = urlFalse()
    this.name = name;
    this.pages = pages;
    const readed = () => {return read ? "Read":"Not read yet";}/* 
    Dont know how this worked :p  */
    this.read = readed()
  };

  function bookConstructor(){
    const mainDiv = document.createElement("div");
    mainDiv.classList = "Book-Object";
    mainDiv.appendChild(document.createElement("button"))
    mainDiv.lastElementChild.setAttribute("class",
      "cancel-button bookObject-cancel-button")
    mainDiv.lastElementChild.innerHTML="X"
    
    mainDiv.appendChild(document.createElement("img"));

    for (let index = 4; index > 0; index--) {
      mainDiv.appendChild(document.createElement("p"))
    }
    grid_Holder.appendChild(mainDiv);
  }


  function addToLibrary(newBookParam){
    const bookCreated = newBookParam;
    
    bookLibrary.set(crypto.randomUUID(), bookCreated)

  };



  function setDataToBookConstructor(url, name, pages, read, id){
    const divToWorkOn = grid_Holder.lastElementChild.querySelectorAll("p")
    const arrayOfArguments = [name, pages, read, id]
    if(url !== undefined){

      const imageElement = grid_Holder.lastElementChild.querySelector("img")
      imageElement.setAttribute("src", url)
    }
    for (let index = 0; index < divToWorkOn.length; index++) {
    divToWorkOn[index].innerHTML = arrayOfArguments[index];
      
    }
    divToWorkOn[divToWorkOn.length-1].setAttribute("class", "idUsageFor")
    divToWorkOn[divToWorkOn.length-2].setAttribute("class", "readUsageFor")
  }



    grid_Holder.addEventListener("click", function(event){

      const divToDelete = event.target.parentNode;
      const pElementsOfDiv = divToDelete.querySelectorAll('p')
      switch(event.target.classList[1] || event.target.classList[0])
      {
        case "bookObject-cancel-button" :
        if(confirm("Delete "+ pElementsOfDiv[0].innerHTML + "?" )){
          bookLibrary.delete(pElementsOfDiv[pElementsOfDiv.length-1].innerHTML)
          divToDelete.parentNode.removeChild(divToDelete)

        }
        break;
        case "readUsageFor":
          
          switch(pElementsOfDiv[2].innerHTML){
            case "Read":
            bookLibrary.delete(pElementsOfDiv[pElementsOfDiv.length-1].innerHTML)
            bookLibrary.set(pElementsOfDiv[pElementsOfDiv.length-1].innerHTML,
              new Book(
                divToDelete.querySelector('img').innerHTML,
                pElementsOfDiv[0].innerHTML,
                pElementsOfDiv[1].innerHTML,
                false
              )
            )
            divToDelete.querySelector('.readUsageFor').innerHTML = "Not read yet"
            break;
            case "Not read yet":
            bookLibrary.delete(pElementsOfDiv[pElementsOfDiv.length-1].innerHTML)
            bookLibrary.set(pElementsOfDiv[pElementsOfDiv.length-1].innerHTML,
              new Book(
                divToDelete.querySelector('img').innerHTML,
                pElementsOfDiv[0].innerHTML,
                pElementsOfDiv[1].innerHTML,
                true
              )
            )
            divToDelete.querySelector('.readUsageFor').innerHTML = "Read"
            break;
          }
          
        break;
        default :
        const pElementsOfNav  = navBar_Book.querySelectorAll('p')
        pElementsOfNav[0].innerHTML = pElementsOfDiv[0].innerHTML
        pElementsOfNav[1].innerHTML = pElementsOfDiv[1].innerHTML
        pElementsOfNav[2].innerHTML = pElementsOfDiv[2].innerHTML
        
        
          
        break;
      }
      
    });

    addBookButton.addEventListener("click", function () {
      const alertDialog = document.querySelector("#alert-dialog");
      alertDialog.showModal();
    });
    closeAddBookDialog.addEventListener("click", function () {
      const alertDialog = document.querySelector("#alert-dialog");
      alertDialog.close();
    });

    formSubmit.addEventListener("submit", function(event){
      if(bookLibrary.size >= 10){
        return alert("Max books reached") /* CREATE AN ALERT HERE
         */
      }
      const dataOfForm = new FormData(event.target);
      const newBook = new Book(
        dataOfForm.get('bookUrl'),
        dataOfForm.get('bookName'),
        dataOfForm.get('bookPages'),
        dataOfForm.get('bookRead')
      )
      addToLibrary(newBook)

         bookConstructor()
      const idOfDiv = [...bookLibrary.keys()].at(-1);
         setDataToBookConstructor(
          newBook.url,
          newBook.name,
          newBook.pages,
          newBook.read,
          idOfDiv
         )
    } )


  /* Pseudocode
    resourses used 
    https://lenguajehtml.com/html/interactivas/etiqueta-html-dialog/


/* tengo error con el bookholder
a la hora de clicker algo fuera del book object vuelve a poner la info de el 
libro al principio, quiza es algo de anidacion, elementos padres e hijos
o simplemente un error de logica
la meta es que el libro sea seleccionado en cualquier parte de su div, y no solo 
en donde esta el texto o la imagen, y que sea pss el correcto

ready, tiene la lista, solo falta ingresar los links para las imagenes base de
cada genero y que funcionen correctamente, ademas que si pase los datos 
correctamente
*/