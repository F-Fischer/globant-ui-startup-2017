/*jshint esversion: 6 */

import EventEmitter from "./eventemitter.es6";
/**
 * Class representing a Movie, extends from EventEmitter to use its methods (emit in this case)
 */
class Movie extends EventEmitter {
  /**
   * Creates a Movie with its Title, its release Year and its Duration
   * @param  {string} title    [Movie title]
   * @param  {number} year     [Movie release year]
   * @param  {number} duration [Movie duration, in minutes]
   */
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
  }
  /**
   * [Emits the event given by the callback,in this case is the Logger, under the label "play". The pause and resume functions do the same]
   * @param  {string} play    [all movies under this label will emitt theri callbacks]
   * @param  {string} Play    [the parameter we pass that will be called]
   */
  play() {
    this.emit("play", "Play");
  }

  pause() {
    this.emit("pause", "Pause");
  }

  resume() {
    this.emit("resume", "Resume");
  }
  /**
   * [Adds a new Actor object to a Map and outputs the Map to a console]
   * @param {Actor} actor [Actor object]
   */
  addCast(actor) {
    let map = new Map();
    let funcActor = actor;
    map.set(funcActor, actor);
    console.log(map.get(funcActor));
  }
}

module.exports = Movie;
