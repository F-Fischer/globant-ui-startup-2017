"use strict";

var _eventemitter = require("./eventemitter.es6");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _actor = require("./actor.es6");

var _actor2 = _interopRequireDefault(_actor);

var _movie = require("./movie.es6");

var _movie2 = _interopRequireDefault(_movie);

var _logger = require("./logger.es6");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//IMPLEMENTATION

// let emitterBundle = require('./eventemitter.es6');
// let actorBundle = require('./actor.es6');
// let movieBundle = require('./movie.es6');
// let loggerBundle = require('./logger.es6');

var logger = new _logger2.default();
var batman = new _movie2.default("Batman", 1989, 126);
var michael = new _actor2.default("Michael Keaton", 38);
var otherCast = [new _actor2.default('Jack Nicholson', 52), new _actor2.default('Kim Basinger', 36)];

var social = {
    share: function share(friendName) {
        console.log("Share " + this.title + " with " + friendName + ".");
    },
    like: function like(friendName) {
        console.log(friendName + " likes " + this.title + ".");
    }
};

Object.assign(batman, social);

batman.on("play", logger.log);
batman.play();
batman.share("Rodrigo Zampa");
batman.like("Rodrigo Zampa");
batman.addCast(michael);
batman.addCast(otherCast);