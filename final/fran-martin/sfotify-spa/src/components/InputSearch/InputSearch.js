import React, { Component } from 'react';

class InputSearch extends React.Component {

  // This binding is necessary to make `this` work in the callback
this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  var config = {
      url : 'https://api.spotify.com/v1/search',
      method : 'GET',
      q : document.getElementById('inputSearch').value,
      type : 'artist',
      limit: 5
    }

    getResponse(config)
          .then(
              function(response) {
                artists = [];
                  var obj = JSON.parse(response);

                  for (let i = 0; i < obj.artists.items.length; i++){

                    artists.push({
                      id: obj.artists.items[i].id,
                      href: obj.artists.items[i].href,
                      name: obj.artists.items[i].name,
                      images: obj.artists.items[i].images
                    });
                  }

                  console.log(artists);
              })
          .catch(
              function(error) {
                  console.log(error);
              });
  }

  getResponse(config){
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();

        let url = config.url;
        url += '?q=' + config.q;
        url += '&type=' + config.type;
        url += '&limit=' + config.limit;

        req.open(config.method, url);
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

  render() {
    return (
      <div>
        <input type = "text" id = "inputSearch" placeholder = "Search the name of your favorite artist">
        </input>
        <button id="searchArtists" onClick={this.handleClick}>Search</button>
      </div>
    )
  }
}
