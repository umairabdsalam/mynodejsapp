
const EventEmitter = require('events'); //class
const emitter = new EventEmitter(); //obj

emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
emitter.emit('messageLogged', { id: 1, url: 'http://'});


