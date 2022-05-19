const Alerts = require('./models/Alerts');

async function validityCheck() {
  try {
    await Alerts.updateMany({expire: {$lt:new Date}}, {$set: {validity: false}});
  } catch (error) {
    console.log(error);
  }
}

module.exports = { validityCheck };
