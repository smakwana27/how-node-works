const fs = require("fs");
fs.readFile("test-file.txt", (err,data) => {
    console.log("HEllo");
});

const readable = fs.readFileSync("test-file.txt");
console.log(readable);

function hello() {
    console.log("Hello");
}

async function print(){
    console.log("Hello");
}
print();
hello();