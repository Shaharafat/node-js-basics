const { clear } = require('console');
const EventEmitter = require('events'); // gives a class

// ----------------- won't work.
// because when calling it form event. there are two different objects.

// function startPeriod() {
//   console.log('Class started');

// raise event when bell rings
// raise an event
//   setTimeout(() => {
//     emitter.emit('bellring', {
//       period: 'first',
//       text: 'period ended',
//     });
//   }, 2000);
// }

// module.exports = startPeriod;

class School extends EventEmitter {
  startPeriod() {
    console.log('Class started');

    // raise event when bell rings
    // raise an event
    setTimeout(() => {
      this.emit('bellring', {
        period: 'first',
        text: 'period ended',
      });
    }, 2000);
  }
}

module.exports = School;
