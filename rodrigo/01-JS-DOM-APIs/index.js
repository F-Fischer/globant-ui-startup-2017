/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("btnChange").addEventListener("click", promiseMe);
  document.getElementById("btnGit").addEventListener("click", responseGit);
  document.getElementById("hiddenJoke").classList.add("visible");
});

const config = {
  // url: "http://api.icndb.com/jokes/random",
  url: "",
  method: "GET",
  q: ""
};

function responsePromise(config) {
  config.url = "http://api.icndb.com/jokes/random";
  return new Promise(function(resolve, reject) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(config.method, config.url, true);
    xhttp.onload = function() {
      if (this.readyState == 4 && xhttp.status == 200) { // Typical action to be performed when the document is ready:
        resolve(xhttp.response);
      } else {
        reject(Error(xhttp.statusText));
      }
    };
    xhttp.onerror = function() {
      reject(Error("Network Error"));
    };
    xhttp.send();
  });
}

function responseGit() {
  config.url = "https://api.github.com/search/repositories?q=";
  config.q = document.getElementById("txtSearch").value;
  let xhttp = new XMLHttpRequest();
  xhttp.open(config.method, config.url + config.q, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { // Typical action to be performed when the document is ready:
      let json = JSON.parse(xhttp.responseText);
      console.log(json.items.length);
      document.getElementById("list").innerHTML = "";
      for (i = 0; i < json.items.length; i++) {
        let ul = document.getElementById("list");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(json.items[i].full_name));
        ul.appendChild(li);
      }
    }
  };

  xhttp.send();
}

function promiseMe() {
  responsePromise(config).then(function(response) {
    // console.log("Success!", response);
    const getJoke = JSON.parse(response);
    document.getElementById("hiddenJoke").innerHTML = getJoke.value.joke;
  }, function(error) {
    // console.error("Failed!", error);
    document.getElementById("hiddenJoke").style.color = "#ff0000";
  });
}
