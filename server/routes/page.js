import express from 'express';
const router = express.Router();

/*
@routes GET /page
@access public
*/
router.get("/", (req,res)=>{
    res.render('pages/writer',{
        title : 'writer',
        style : 'writer',
    })
});

/*
@routes GET /page/sample
@access public
*/
router.get("/sample" ,(req,res)=>{
    res.render('pages/test',{
        title : 'home',
        formUrl : '/api/post',
        style : ''
    })
});

// export
export default router;