const fs = require("fs");

//const files = fs.readdirSync("./Assets");

fs.readdir("./Assets",(err,files) => {
    if(err){
        throw err;
    }

console.log(files);
});