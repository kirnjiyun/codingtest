const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(Number);
}).on('close', function () {
    const n = input[0];

    function Triangle(n) {
        for (let i = 1; i <= n; i++) {
            const stars = i;
            console.log("*".repeat(stars));
        }
    }

    Triangle(n);
});
