//const [,,firstName, lastName] = process.argv;
const grab = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag) +1;
    return process.argv[indexAfterFlag];
}
console.log(process.pid);
//console.log(process.versions.node);

//console.log(process.argv);

//console.log(`Your name is ${firstName} ${lastName}`);
const greeting = grab ("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

