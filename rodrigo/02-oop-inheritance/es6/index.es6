/*jshint esversion: 6 */
import EventEmitter from "./eventemitter.es6";
import Actor from "./actor.es6";
import Movie from "./movie.es6";
import Logger from "./logger.es6";

//IMPLEMENTATION

let logger = new Logger();
let batman = new Movie("Batman", 1989, 126);
let michael = new Actor("Michael Keaton", 38);
let otherCast = [
    new Actor('Jack Nicholson', 52),
    new Actor('Kim Basinger', 36)
];
/**
 * [Social is an object literal with two functions: Share and Like]
 */
let social = {
  /**
   * [Share function, outputs a console.log]
   * @param  {string} friendName [Name of the person that shares the Movie]
   * @return {[log]}            [returns a console log with the name of the person and the movie it shared]
   * this.title refers to the title of the Movie
   */
    share: function(friendName) {
        console.log("Share " + this.title + " with " + friendName + ".");
    },
    /**
     * [Same as the Share function]
     * @param  {string} friendName [Name of the person that likes the Movie]
     * @return {[type]}            [returns a console log with the name of the person and the movie it likes]
     */
    like: function(friendName) {
        console.log(friendName + " likes " + this.title + ".");
    }
};

/**
 * We mix Social methods into a Movie instance, so it can use its methods Share and Like
 */
Object.assign(batman, social);

batman.on("play", logger.log);
batman.play();
batman.share("Rodrigo Zampa");
batman.like("Rodrigo Zampa");
batman.addCast(michael);
batman.addCast(otherCast);
