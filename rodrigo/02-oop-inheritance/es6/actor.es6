/*jshint esversion: 6 */
/**Class representing an Actor */
class Actor {
    /**
   * [Create an actor/actress class with his/her name and age]
   * @param  {[string]} name [Actor's name]
   * @param  {[number]} age  [Actor's age]
   */
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
}

module.exports = Actor;
