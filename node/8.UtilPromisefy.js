const {readFile}=require('fs');
const util=require('util');
const readFilePromise=util.promisify(readFile);
const start=async()=>{
    try{
        const first=await readFilePromise('./content/first.txt','utf8');
        const second=await readFilePromise('./content/second.txt','utf8');
        console.log(first,second);
        console.log('first and second read successfully');
    }catch(error){
        console.log(error);
    }
}
console.log('starting');
start();