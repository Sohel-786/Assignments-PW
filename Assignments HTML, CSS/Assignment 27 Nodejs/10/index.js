const event = require('events');

const eventEmitter = new event();

console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5);

console.log(`The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);

