const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', (org_name) =>{
    console.log('Thanks For Subscribing to', org_name);
});

console.log("Calling event listner before removing the event.");

eventEmitter.emit('subscribe', 'College Wallah');

// now let's remove the event handler or listener

eventEmitter.removeAllListeners('subscribe');

console.log("Calling event listner after removing the event.");

eventEmitter.emit('subscribe', 'Physics Wallah');
