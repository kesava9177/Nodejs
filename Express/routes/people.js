const express= require('express');
const router=express.Router();
var {products, people} = require('../data.js');
const logger=require('../logger.js');
router.put('/',(req,res)=>{
    const {id}=req.params;
    var flag=false;
    people=people.map((person)=>{
        if(person.id===Number(id)){
            flag=true;
            person.name=req.body.name;
        }
        return person;
    })
    if(!flag){
        return res.status(404).json({msg:`Person with id ${id} not found`});
    }
    res.json({success:true,data:people});
})
router.delete('/',(req,res)=>{
    const {id}=req.params;
    const person=people.find((person)=>person.id===Number(id));
    if(!person){
        return res.status(404).json({msg:`Person with id ${id} not found`});
    }
    people=people.filter((person)=>person.id!==Number(id));
    res.json({success:true,data:people});
})
module.exports=router;