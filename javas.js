function Book(name,pages,read){
    this.name = name;
    this.pages = pages;
    this.read = function() {return read ? "Read":"not read yet";}
    this.info = this.name + " " + this.pages + " " + this.read();
  }
  let potter = new Book("harry photer","240",true)
  console.log(potter.info);
  