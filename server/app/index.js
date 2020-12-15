import express from 'express'
import morgan from 'morgan'
import hpp from "hpp"
import helmet from "helmet"
import cors from "cors"
import crypto from "crypto"
import contentSecurityPolicy from 'helmet-csp'

const app = express();

// csp 설정 
// 참고 : http://expressjs.com/ko/advanced/best-practice-security.html
app.locals.nonce = crypto.randomBytes(16).toString("hex");

app.use(
   contentSecurityPolicy({
      directives: {
         defaultSrc: ["'self'"],
         styleSrc: ["'self'"],
         scriptSrc: [`'self'`,`'nonce-${ app.locals.nonce }'`],        
         imgSrc: ["'self'"],
         fontSrc: ["'self'"]
      }
}));


/*
app.use(
   contentSecurityPolicy({
     directives: {
       defaultSrc: ["'self'", "default.example"],
       scriptSrc: ["'self'", "'unsafe-inline'"],
       objectSrc: ["'none'"],
       upgradeInsecureRequests: [],
     },
     reportOnly: false,
   })
 );
app.use((req, res, next) => {
   res.locals.nonce = crypto.randomBytes(16).toString("hex");
   next();
 });
  
 app.use((req, res, next) => {
   contentSecurityPolicy({
     directives: {
       defaultSrc: ["'self'"],
       scriptSrc: ["'self'", `'nonce-${res.locals.nonce}'`],
     },
   })(req, res, next);
 });
  
 app.use((req, res) => {
   res.end(`<script nonce="${res.locals.nonce}">alert(1 + 1);</script>`);
 });
*/

// 보안적인 측변 보완 hpp/helmet
// cors 브라우저가 다른 포트 자원을 요청할 수 있도록
// origin:true 모두 허용/ credentials:true 
// morgan : 로그 찍기 / 
app.use(hpp()).use(helmet())
   .use(cors({origin:true, credentials:true}))
   .use(morgan("dev"))

export default app;


