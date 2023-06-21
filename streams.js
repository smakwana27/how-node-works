const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req,res) => {
    //  solution1 
    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err) console.log(err);
    //     res.end(data);
    // });

    // solution 2: Strems (large files)
//     const readable = fs.createReadStream('test-file.txt');
//     readable.on('data', chunk => {
//         res.write(chunk);
//     })
//     readable.on('end', ()=> {
//         res.end();
//     });
//     readable.on('error', err => {
//         console.log(err);
//         res.statusCode = 500;
//         res.end("File Not Found");
//     })

// solution 3 So the pipe operator automatically solves the problem of backpressure that we had previously.
const readable = fs.createReadStream('test-file.txt');
readable.pipe(res);
});


server.listen(8000, "127.0.0.1", () => {
    console.log("Listening...");
})