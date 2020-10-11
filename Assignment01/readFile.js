const fs = require("fs");

const text = fs.readFileSync("./Assets/Readme.md","UTF-8");

console.log(text);