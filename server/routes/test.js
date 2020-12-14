import express from 'express';
const router = express.Router();

router.get("/", (req,res)=>{
    console.log(req.query);
    res.send('안녕하세요')
});

router.post("/", (req,res)=>{
    console.log(req.body);
    res.json(req.body);
});

// 기본 export
export default router;