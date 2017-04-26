/*jshint esversion: 6 */
/**
 * Class representing an event emitter
 */
class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

/**
 * [Subscribe an object]
 * @param  {string}   label    [identifies the type of notifications the listener wants to receive]
 * @param  {Function} callback [the callback function we should invoke for the listener when we emit that event]
 */
  on(label, callback) {
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  }

  let isFunction = function(obj) {
    return typeof obj == 'function';
  };
  
/**
 * [Unsubscribes the object]
 * @param  {[string]}   label    [identifies the type of notifications the listener wants to receive]
 * @param  {Function} callback [the callback function we should invoke for the listener when we emit that event]
 * @return {[type|boolean]}            [returns if the object is a function | false]
 */
  off(label, callback) {
    let listeners = this.listeners.get(label),
      index;
/**
 * [this if will remove the listener given by the parameters passed through the function and reduce the index number of the Map]
 * @param  {Map} listeners [the map containing the subscribed listeners]
 * @return {boolean}           [returns true if everything is OK]
 */
    if (listeners && listeners.length) {
      index = listeners.reduce((i, listener, index) => {
        return (isFunction(listener) && listener === callback) ?
          i = index :
          i;
      }, -1);

      if (index > -1) {
        listeners.splice(index, 1);
        this.listeners.set(label, listeners);
        return true;
      }
    }
    return false;
  }
/**
 * [the emit function]
 * @param  {string} label [identifies the type of notifications the listener wants to receive]
 * @param  {type} args  [we can pass differente arguments that might be useful to the function,
 * in this case we pass the name of the event we want the console to output (Play, Pause, Resume)]
 * @return {boolean}       [returns true if everything was OK]
 */
  emit(label, ...args) {
    let listeners = this.listeners.get(label);
    if (listeners && listeners.length) {
      listeners.forEach((listener) => {
        listener(...args);
      });
      return true;
    }
    return false;
  }
}

module.exports = EventEmitter;
