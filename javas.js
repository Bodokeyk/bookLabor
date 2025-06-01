function Book(name,pages,leido){
    this.name = name;
    this.pages = pages;
    this.read = function() {return leido ? "leido":"not read yet";}
    this.info = this.name + " " + this.pages + " " + this.read();
  }
  let potter = new Book("harry popo","240",true)
  console.log(potter.info);
  