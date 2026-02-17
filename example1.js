const fs = require("fs");

fs.readFile('foo.txt', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

fs.readFile('mytext.txt', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

console.log("program ended");
