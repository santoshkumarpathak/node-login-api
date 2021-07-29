const router = require('express').Router();
const verify= require('./verifyToken')

// router.get('/',(req,res) => {
    router.get('/',verify,(req,res) => {
        
    res.json({
        post:{
            title: 'my first post',
             description: 'random data you shouldnt access'
        }

    });
});

module.exports = router;