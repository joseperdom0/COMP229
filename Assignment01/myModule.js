let count = 0;

const name = "Jose";

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;



module.exports = {
    inc,
    dec,
    getCount,name
}
