const fs=require('fs');

const stream=fs.createReadStream('./content/big.txt',{encoding:'utf8',highWaterMark:90000});

// stream.on('data',(result)=>{
//     console.log(result);
// });

// stream.on('error',(err)=>{
//     console.log(err);
// });

const http=require('http');
http.createServer((req,res)=>{
    stream.pipe(res);
}).listen(5000);