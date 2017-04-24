//Indexed DB
//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

const data = [{id:1, text: ""}];

var db;
let request = window.indexedDB.open("MyDB", 1);

//defining request events
request.onerror = function(event) {
     console.log("error: ");
};

request.onsuccess = function(event) {
      db = request.result;
      console.log("success: "+ db);
};

request.onupgradeneeded = function(event) {
     db = event.target.result;
     let objectStore = db.createObjectStore("savedText", {keyPath: "id"});

     for (let i in data) {
         objectStore.add(data[i]);
      }
}
