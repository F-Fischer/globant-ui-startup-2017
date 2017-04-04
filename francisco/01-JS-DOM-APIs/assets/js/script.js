document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("hiddenJokeSection").style.opacity = 1;
    document.getElementById("hiddenHelloWorld").style.opacity = 1;

    document.getElementById('btn').addEventListener('click', getJoke);
    document.getElementById('btnGithubRepo').addEventListener('click', getGithubRepos);

});


let getJoke = function() {
    var config = {
        url: 'http://api.icndb.com/jokes/random',
        method: "GET"
    }

    getResponse(config)
        .then(
            function(response) {
                var obj = JSON.parse(response);
                document.getElementById('joke').innerHTML = obj.value.joke;
            })
        .catch(
            function(error) {
                //$("#hwSection").css("background", "red");
                console.log(error);
            });

}

let getGithubRepos = function() {
    var parameter = document.getElementById('repoName').value;
    var config = {
        url: 'https://api.github.com/search/repositories',
        method: 'GET',
        parameter: parameter
    };

    getResponseGithub(config)
        .then(
            function(response) {
                //console.log(response);
                document.getElementById('repoList').innerHTML = "";
                var obj = JSON.parse(response);
                var res = {}

                for (i = 0; i < obj.items.length; i++) {
                    document.getElementById('repoList').innerHTML += '<li>' + obj.items[i].full_name + '</li>';
                    console.log(obj.items[i].full_name);
                }
            },
            function(err) {
                console.log(err);
            }
        );
}

let getResponse = function(config) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open(config.method, config.url);
        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(new Error(req.statusMsg));
            }
        };

        req.onerror = function() {
            reject(new Error("Network error"));
        };

        req.send();
    });

}



let getResponseGithub = function(config) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open(config.method, config.url + '?q=' + config.parameter);
        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(new Error(req.statusMsg));
            }
        };

        req.onerror = function() {
            reject(new Error("Network error"));
        };

        req.send();
    });
}
