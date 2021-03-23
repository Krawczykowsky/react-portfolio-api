const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    try {
        res.send("test123")
    } catch(err){
        res.json({message: err})
    }
})
module.exports = router;
