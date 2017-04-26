/*jshint esversion: 6 */
/** Class representing a console log*/
class Logger {
  constructor() {}

/**
 * [log function that will output through the console the type of event emitted]
 * @param  {string} info [the event emitted (Play, Pause or Resume)]
 * @return {type}      [returns a console.log]
 */

  log(info) {
    console.log("The " + info + " event has been emitted.");
  }
}

module.exports = Logger;
