"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require("./eventemitter.es6");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // let movieEmitterBundle = require('./eventemitter.es6');


var Movie = function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    return _this;
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      this.emit("play", "Play");
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit("pause", "Pause");
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit("resume", "Resume");
    }
  }, {
    key: "addCast",
    value: function addCast(actor) {
      var map = new Map();
      var funcActor = actor;
      map.set(funcActor, actor);
      console.log(map.get(funcActor));
    }
  }]);

  return Movie;
}(_eventemitter2.default);

module.exports = Movie;