const {readFile}=require('fs');
const {writeFile}=require('fs');
console.log('start');
const first=readFile('./content/first.txt','utf8',
    (err,result) =>{
        if(err){
            console.log(err);
            return;
        }
        const first=result;
        const second=readFile('./content/second.txt','utf8',
            (err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                const second=result;
                writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,{flag:'a'},(err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log('done with this task');
                });
            }
        )
    }
);
console.log('starting next task');