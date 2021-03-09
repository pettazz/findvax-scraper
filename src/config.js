module.exports = {
  appName: "JabzoneScraper",
  debug: false, // boolean, writes extra logging
  logging: {
    level: "trace",
    stdout: true, //boolean
    file: false // else a path like "logs/log.json"
  },
  metrics: {
    stdout: false, //boolean
    file: false // else a path like "logs/metrics.json"
  },
  http: {
    timeout: 10000,
    maxRedirects: 5
  },
  stopnshop: {
    daysToSearch: 7,
    timeout: 30 * 1000
  },
  athena: {
    daysToSearch: 14
  },
  timetap: {
    daysToSearch: 14
  },
  sphp: {
    startDayOffset: 2,
    daysToSearch: 9
  }
};