import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import ejs from 'ejs'
import bodyParser from 'body-parser'
//===========================//
import morgan from 'morgan';
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import path from "path";

const app = express();

// 서버가 읽을 수 있도록 views 의 위치를 정의해줍니다. 
app.set('views', path.join(__dirname,"..","views")); 
// 서버가 HTML 렌더링을 할 때, EJS엔진을 사용하도록 설정합니다. 
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
// ejs-layout
app.use(expressLayouts);
app.set('layout', 'layouts/layout.html');
app.set("layout extractScripts", true); 

// 서버에서 static 파일에 접근 가능하도록 허용
app.use('/static', express.static(path.join(__dirname,"..",'/public')));

app.locals.nonce = crypto.randomBytes(16).toString("hex");

app.use(csp({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'"],
    scriptSrc: ["'self'", `'nonce-${app.locals.nonce}'`],
    imgSrc: ["'self'"],
    fontSrc: ["'self'"]
  }
}));

// http://expressjs.com/ko/advanced/best-practice-security.html

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));

// 보안적인 측변 보완 hpp/helmet
// cors 브라우저가 다른 포트 자원을 요청할 수 있도록
// origin:true 모두 허용/ credentials:true 
// morgan : 로그 찍기 / 
app.use(hpp()).use(helmet())
   .use(cors({origin:true, credentials:true}))
   .use(morgan("dev"))


export default app;


