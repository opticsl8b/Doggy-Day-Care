const router=require("express").Router();

router.get("/",(req,res)=>{
    if(!req.session.loggedIn){
        res.status(404).end();
    }else{
        res.status(204).end();
    }
});

module.exports=router;

