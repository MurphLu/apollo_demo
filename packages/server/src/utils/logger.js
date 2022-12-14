const log4js = require('log4js');

log4js.configure({
  appenders:{
    out: { type: 'stdout' }
  },
  categories: {
    default: { appenders: ["out"], level: "debug" },
  },
})

const log = log4js.getLogger();

module.exports = log;
