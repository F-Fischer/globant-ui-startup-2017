let isFunction = function(obj) {
  return typeof obj == 'function' || false;
}

class EventEmitter {

  constructor() {
    this.listeners = new Map();
  }



  on(label,callback) {
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  }

  off(label,callback) {
    let listener = this.listeners.get(label),index;

    if(listeners && listeners.length){
      index = listeners.reduce((i, listener, index) => {
          return (isFunction(listener) && listener === callback) ?
              i = index :
              i;
      }, -1);

      if(index > -1) {
          listeners.splice(index,1);
          this.listeners.set(label, listeners);
          return true;
      }
    }
    return false;

  }

  emit(label, ...args) {
    let listeners = this.listeners.get(label);

    if(listeners && listeners.length){
      listeners.forEach((listener) => {
        listener(...args);
      });
      return true;
    }
    return false;
  }

}

class Observer {

    constructor(id,subject){
      this.id = id;
      this.subject = subject;
      this.subject.addListener("change", (data) => this.onChange(data));
    }

    onChange(data){
      console.log(`${this.id} notified of change:`, data);
    }

}

class Movie extends EventEmitter{

  constructor(title,year,duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.actors = [];
  }

  play(){
    this.emit("play","Play");
  }

  pause() {
    this.emit("pause","Pause");
  }

  resume(){
    this.emit("resume","Resume");
  }

  addCast(cast){
    if(Array.isArray(cast)){
      for(let i = 0; i<cast.length; i++){
        this.actors.push(cast[0]);
      }
    }
    else{
        this.actors.push(cast);
    }
  }
}

class Logger {
  constructor() {}
  log(info) {
    console.log("The " + info + " event has been emitted.");
  }
}

let Social =  {
  like: function(friendName){
    console.log(friendName + " likes " + this.title);
  },
  share: function(friendName){
    console.log(friendName + " share " + this.title);
  }
}

let logger = new Logger();
let divergente = new Movie("Divergente",2014,139);

Object.assign(divergente,Social);

divergente.like("Francisco");
divergente.share("Francisco");

class Actor {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

let shailene = new Actor("Shailene Woodley",25);
let otherCast = [
  new Actor("Theo James",32),
  new Actor("Jai Courtney", 31)
]
