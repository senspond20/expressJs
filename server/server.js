import express from 'express'
import config from './config'
//===========================//
import morgan from 'morgan';
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";

const app = express();
const {PORT} = config;

// 보안적인 측변 보완 hpp/helmet
app.use(hpp());
app.use(helmet());

// cors 브라우저가 다른 포트 자원을 요청할 수 있도록
// origin:true 모두 허용/ credentials:true 
app.use(cors({origin:true, credentials:true}));

// 로그 찍기
app.use(morgan("dev"));

// bodyparser -> 지금은 express에 내장
app.use(express.json());

app.get("",(req,res) =>{
    res.send("index.html")
})

app.get("/api/test",(req,res) =>{
    var a = {
        "ciNo" :"고객식별번호",
        "strmYd" : "시작날짜",
        "종료날짜" :"2020-10-21"
    };
    res.status(200).send(a)
})

app.listen(PORT, () => {
    console.log(`Server is up on Start : http://localhost:${PORT}`);
  });