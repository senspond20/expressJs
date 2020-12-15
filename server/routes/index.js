import express from 'express';
const router = express.Router();

var layoutConfig = {
    csp : `default-src self; 
    style-src 'self'  http://* 'unsafe-inline'; 
    script-src 'self' http://* 'unsafe-inline';`,
    title : '',
    style : ''
}
/*
 index
 @routes GET /
 @access public
*/
router.get("/" ,(req,res)=>{
    res.render('index',{
        title : 'home',
        style : ''
    })
});

// export
export default router;