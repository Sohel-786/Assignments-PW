const event = require('events');

const eventEmitter = new event();

eventEmitter.on('subscribe', (org_name) =>{
    console.log('Thanks For Subscribing to', org_name);
});

eventEmitter.emit('subscribe', 'College Wallah');