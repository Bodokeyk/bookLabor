
const grid_Holder = document.querySelector('.Grid-Holder');
const navBar_Holder = document.querySelector('.NavBar-Holder')
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


-creo que lo arregle, pero de responsive no tiene ni vrga jasdklfjkladsf
, no chingamos, si se saco la chamba seniores


DIAVLASOOO, SE SACOOOOO
ahora falta lo de cambiar el status de leido, pero si se pudo uno
se saca el otro

    -nueva idea, cambiar el objeto book por uno nuevo que tenga diferente 
    el read utilizando el mismo id y solo setearlo

    ya, se pudo, se hizo, pero ahora esta bien qlero mi codigo, espero limpiarlo 
    un poco maniana o asi
    

    posiblemente usar el mismo event listener de grid-Holder 
    (para borrar los libros) solo que ahora enfocado a una label 
    onde este lo del status leido, tipo toggle ?
    -agregar un toggle? a  cada bookObject para cambiar el status de read
    -este boton corrija el display y tambien desde el map

    o si no, poor otra parte esto
    To facilitate this you will want to create Book prototype
     function that toggles a book instance’s read status.
    

    -posiblemente corregir el uso excesivo de acciones en el eventListener
    de borra libros, convertirlos a funciones por aparte?
    -posiblemente otro metodo que corrija el empezar toda la operacion con
    el eventlistener de la form (https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
    -arreglar el display del bookholder
    -

   */
