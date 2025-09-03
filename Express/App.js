const express = require('express');
const path = require('path');
var {products, people} = require('./data');
const logger=require('./logger');
const Authorised=require('./Authorised');
const app = express();
app.use("./products",[logger,Authorised]);
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
// });
app.use("/products",require('./routes/products.js'));
app.use("/people",require('./routes/people.js'));
// app.get('/api/products',(req,res)=>{

// app.get('/products/:id',(req,res)=>{
//     const {id}=req.params;
//     const singleProduct=products.find((product)=>product.id===Number(id));
//     if(!singleProduct){
//         return res.status(404).json({msg:`Product with id ${id} not found`});
//     }
//     res.json(singleProduct);
// })
// app.get('/products/query',logger,(req,res)=>{
//     const {search,limit}=req.query;
//     let sortedProducts=[...products];
//     if(search){
//         sortedProducts=sortedProducts.filter(product=>product.name.startsWith(search));
//     }
//     if(limit){
//         sortedProducts=sortedProducts.slice(0,Number(limit));
//     }
//     if(sortedProducts.length<1){
//         return res.status(200).json({success:true,data:[]});
//     }
//     res.status(200).json(sortedProducts);
// })
// app.put('/people/:id',(req,res)=>{
//     const {id}=req.params;
//     var flag=false;
//     people=people.map((person)=>{
//         if(person.id===Number(id)){
//             flag=true;
//             person.name=req.body.name;
//         }
//         return person;
//     })
//     if(!flag){
//         return res.status(404).json({msg:`Person with id ${id} not found`});
//     }
//     res.json({success:true,data:people});
// })

// app.delete('/people/:id',(req,res)=>{
//     const {id}=req.params;
//     const person=people.find((person)=>person.id===Number(id));
//     if(!person){
//         return res.status(404).json({msg:`Person with id ${id} not found`});
//     }
//     people=people.filter((person)=>person.id!==Number(id));
//     res.json({success:true,data:people});
// })
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
