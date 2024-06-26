const Datastore = require("gray-nedb");
const path = require("path");

const db = new Datastore({
  filename: path.join(__dirname, "websiteDatabase.db"),
  autoload: true,
});

module.exports = db;