import app from '../app'
import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import ejs from 'ejs'
import bodyParser from 'body-parser'
import path from "path";

// 서버가 읽을 수 있도록 views 의 위치를 정의
app.set('views', path.join(__dirname,"..","views")); 

// 서버가 HTML 렌더링을 할 때, EJS엔진을 사용하도록 설정
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// ejs-layout
app.use(expressLayouts);
app.set('layout', 'layouts/layout.html');
app.set("layout extractScripts", true); 

// 서버에서 static 파일에 접근 가능하도록 허용
app.use('/static', express.static(path.join(__dirname,"..",'/views/public')));

// bodyParser.json() vs express.json() : 차이점 존재
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));

export default app;