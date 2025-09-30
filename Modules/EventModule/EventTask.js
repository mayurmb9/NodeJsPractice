
const EventEmitter = require('events');

const emitter = new EventEmitter();

const emitterTracker = {
    'user-login': 0,
    'user-purchase': 0,
    'user-logout': 0,
    'update-profile': 0
}

emitter.on('emitter-summary', (emitterTracker) => {
    console.log(emitterTracker);
})

emitter.on('user-login', (username) => {
    emitterTracker['user-login']++;
    console.log(`${username} logged in`);
})

emitter.on('user-purchase', (username, product) => {
    emitterTracker['user-purchase']++;
    console.log(`${username} purchased ${product}`);
})

emitter.on('user-logout', (username) => {
    emitterTracker['user-logout']++;
    console.log(`${username} logged out`);
})

emitter.on('update-profile', (username, newEmail) => {
    emitterTracker['update-profile']++;
    console.log(`${username} updated email to ${newEmail}`);
})


emitter.emit('user-login', "John");

emitter.emit('user-purchase', "John", "Shirt");

emitter.emit('user-logout', "John");

emitter.emit('update-profile', "John", "jon.new@gmail.com");

emitter.emit('emitter-summary', emitterTracker);
