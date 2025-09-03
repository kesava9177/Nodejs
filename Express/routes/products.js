const express= require('express');
const route=express.Router();
var {products, people} = require('../data.js');
const logger=require('../logger.js');
route.get('/',(req,res)=>{
    res.json(products);
})
route.get('/query',logger,(req,res)=>{
    const {search,limit}=req.query;
    let sortedProducts=[...products];
    if(search){
        sortedProducts=sortedProducts.filter(product=>product.name.startsWith(search));
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length<1){
        return res.status(200).json({success:true,data:[]});
    }
    res.status(200).json(sortedProducts);
})

module.exports=route;