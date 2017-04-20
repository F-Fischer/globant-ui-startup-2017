document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('clearText').addEventListener('click', clearText);
    document.getElementById('saveText').addEventListener('click', saveText);

});

let saveText = function () {
  localStorage.setItem('savedText',document.getElementById('textToSave').value);
  //var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  //window.msIndexedDB;
}

let clearText = function () {
  localStorage.removeItem('savedText');
}
