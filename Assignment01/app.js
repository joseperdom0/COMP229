const { count } = require("console");
const counter = require("./myModule");

console.log(counter.name);

counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());