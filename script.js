let myLibrary = [];

function Book(title, author, npages, read) {
  // The constructor
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.read = read;
};





var table = document.getElementById("table");


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
  
  



