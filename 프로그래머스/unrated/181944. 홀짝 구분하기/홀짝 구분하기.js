const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);

    function check(num) {
        if (num % 2 === 0) {
            console.log(`${num} is even`);
        } else {
            console.log(`${num} is odd`);
        }
    }

    check(n);
});
