import express from 'express';

const router = express.Router();
/*
 @routes GET /api/post
 @access public
*/
router.get("/", (req,res)=>{
    console.log(req.query);
    res.send('안녕하세요')
});

/*
 @routes GET /api/post
 @access public
*/
router.post("/", (req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

// export
export default router;