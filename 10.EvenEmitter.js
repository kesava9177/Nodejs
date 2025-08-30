const EventEmitter = require('events');
const customEmitter = new EventEmitter();

// on - listen for an event
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic here`);
});
customEmitter.emit('response', 'john', 34);

// emit - emit an event
// customEmitter.emit('response');
// order matters - first we have to listen for the event then we can emit it
// we can also pass multiple arguments in the emit function
// we can also have multiple listeners for the same event
// we can also have multiple emitters for the same event
// we can also have multiple events
