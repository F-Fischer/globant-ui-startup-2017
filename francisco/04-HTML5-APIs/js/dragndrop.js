document.addEventListener("DOMContentLoaded", function(event) {

  let textArea = document.getElementById('textToSave');
  let state = document.getElementById('status');

  //Check if File API & FileReader is available for the browser
  if (typeof window.FileReader === 'undefined') {
      state.className = 'fail';
  } else {
      state.className = 'success';
      state.innerHTML = 'File API & FileReader available';
  }

  //Defining drag n drop events   
  textArea.ondragover = function() {
      this.className = 'hover';
      return false;
  };
  textArea.ondragend = function() {
      this.className = '';
      return false;
  };
  textArea.ondrop = function(e) {
      this.className = '';
      e.preventDefault();

      var file = e.dataTransfer.files[0],
          reader = new FileReader();
      reader.onload = function(event) {
          console.log(event.target);
          textArea.value = event.target.result;
      };
      console.log(file);
      reader.readAsText(file);

      return false;
  };

});
