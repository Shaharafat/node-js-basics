const School = require('./school');
// startPeriod emits from another emitter. so it won't work
// const startPeriod = require('./school');

const school = new School();
// register a listener for bellRing event
school.on('bellring', ({ period, text }) => {
  console.log(`We need to run because ${period} ${text}`);
});

// startPeriod();

school.startPeriod();
