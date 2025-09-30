//Importing the EventEmitter module
const EventEmitter = require('events');


//Creating an instance of the EventEmitter class
const emitter = new EventEmitter();

//Defining an event listener
emitter.on('greet', ({name, profession}) => {
    console.log(`Hello ${name}, you are a ${profession}?`);
})

//Triggering the event
emitter.emit('greet', { name: 'John', profession: 'Developer' });

