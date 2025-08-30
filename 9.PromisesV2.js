const {readFile}=require('fs').promises;

const start=async()=>{
    try{
        const first=await readFile('./content/first.txt','utf8');
        const second=await readFile('./content/second.txt','utf8');
        console.log(first,second);
        console.log('first and second read successfully');
    }catch(error){
        console.log(error);
    }
}
console.log('starting');
start();