const event = require('events');

const eventEmitter = new event();

eventEmitter.on('subscribe', (org_name) =>{
    console.log('Thanks For Subscribing to', org_name);
});

eventEmitter.emit('subscribe', 'College Wallah');

console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5);

console.log(`The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);

