//DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('clearTextLS').addEventListener('click', clearTextLS);
    document.getElementById('saveTextLS').addEventListener('click', saveTextLS);
    document.getElementById('logTextLS').addEventListener('click', getTextLS);

    document.getElementById('clearTextIDB').addEventListener('click', clearTextIDB);
    document.getElementById('saveTextIDB').addEventListener('click', saveTextIDB);
    document.getElementById('logTextIDB').addEventListener('click', getTextIDB);

});

//localStorage Functions

/**
 * saveTextLS - Saves textbox content using localStorage
 */
let saveTextLS = function () {
  localStorage.setItem('savedText',document.getElementById('textToSave').value);
}

/**
 * clearTextLS - Clears saved content using localStorage
 */
let clearTextLS = function () {
  localStorage.removeItem('savedText');
}

let getTextLS = function () {
  console.log(localStorage.getItem('savedText'));
}

//IndexedDB functions
//saveTextIDB - clearTextIDB, both functions updates an object in the db
//
/**
 * saveTextIDB - Saves textbox content using IndexedDB
 */
let saveTextIDB = function () {

  let transaction = db.transaction('savedText', 'readwrite');
  let store = transaction.objectStore('savedText');

  store.openCursor().onsuccess = function(event){

    let cursor = event.target.result;
    let updateData = cursor.value;
    updateData.text = document.getElementById("textToSave").value;
    let request = cursor.update(updateData);

    request.onsuccess = function() {
          console.log('Text saved');
        };
  };
}

/**
 * clearTextIDB - Clears saved content using IndexedDB
 */
let clearTextIDB = function () {

  let transaction = db.transaction('savedText', 'readwrite');
  let store = transaction.objectStore('savedText');

    store.openCursor().onsuccess = function(event){
    let cursor = event.target.result;
    let updateData = cursor.value;
    updateData.text = "";
    let request = cursor.update(updateData);
    request.onsuccess = function() {
          console.log('Text cleared');
        };
  };

}

let getTextIDB = function () {

   let transaction = db.transaction(["savedText"]);
   let objectStore = transaction.objectStore("savedText");
   let request = objectStore.get(1);

   request.onerror = function(event) {
        alert("Unable to retrieve text from database!");
   };

   request.onsuccess = function(event) {

   if(request.result) {
     console.log(request.result.text);

   }
   else {
           alert("text couldn't be found in database!");
    }
   };

}
