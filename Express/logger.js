const logger=(req,res,next)=>{
    console.log("Logger initialized");
    next();
}
module.exports=logger;