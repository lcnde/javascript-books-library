let myLibrary = [];

var table = document.getElementById("table");



// Code made with constructors 

function addBookToLibrary() {
  let libtitle = document.getElementById("title").value;
  let libauthor = document.getElementById("author").value;
  let libpages = document.getElementById("npages").value;
  let libread = document.getElementById("radio").value;
  
  let newBook = new Book(libtitle, libauthor, libpages, libread);
  myLibrary.push(newBook);

  
  

 // myLibrary.forEach(function(item) {
    console.log("ok")
    var row = table.insertRow(1);
    var titlecell = row.insertCell(0);
    var authorcell = row.insertCell(1);
    var pagecell = row.insertCell(2);
    var readcell = row.insertCell(3);
    titlecell.innerHTML = `${libtitle}`;
    authorcell.innerHTML = `${libauthor}`;
    pagecell.innerHTML = `${libpages}`;
    readcell.innerHTML = `${libread}`;
  };

  // /Code made with constructors

  // Re-write the same code using class syntax instead

  class bookClass {
    constructor(title, author, npages, read) {
      this.title = title;
      this.author = author;
      this.npages = npages;
      this.read = read;
    }

    addBook() {
      myLibrary.push(this);

      var row = table.insertRow(1);
      var titlecell = row.insertCell(0);
      var authorcell = row.insertCell(1);
      var pagecell = row.insertCell(2);
      var readcell = row.insertCell(3);

      console.log("ok");
      titlecell.innerHTML = `${this.title}`;
      authorcell.innerHTML = `${this.author}`;
      pagecell.innerHTML = `${this.npages}`;
      readcell.innerHTML = `${this.read}`;
    }
  };


  function addBookToLibraryClass() {
    // you redeclare this everytime because they need to fetch the new values inserted in the form
    let libtitle = document.getElementById("title").value;
    let libauthor = document.getElementById("author").value;
    let libpages = document.getElementById("npages").value;
    let libread = document.getElementById("radio").value;

    let porcoddio  = new bookClass(`${libtitle}`, `${libauthor}`, `${libpages}`, `${libread}`);
    porcoddio.addBook();
  }
  
  



