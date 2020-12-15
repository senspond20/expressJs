import express from 'express'
import morgan from 'morgan'
import hpp from "hpp"
import helmet from "helmet"
import cors from "cors"
import crypto from "crypto"
import config from "../config"

const {PORT, CSP} = config;
const app = express();

// app.use(helmet()) : csp, expectCt, hpkp,noCache, referrerPolicy 는 적용되지 않음

// 보안적인 측변 보완 hpp/helmet
// cors 브라우저가 다른 포트 자원을 요청할 수 있도록
// origin:true 모두 허용/ credentials:true 
// morgan : 로그 찍기 / 
app.use(hpp())
   .use(cors({origin:true, credentials:true}))
   .use(morgan("dev"));

// 참고 : http://expressjs.com/ko/advanced/best-practice-security.html
app.locals.nonce = crypto.randomBytes(16).toString("hex");

// helmet
app.use(helmet());
app.use(helmet.contentSecurityPolicy(CSP));


export default app;


