# express Setting

```json
"dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.5",
    "express": "^4.17.1",
    "helmet": "^4.2.0",
    "hpp": "^0.2.3",
    "multer": "^1.4.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.12.1",
    "@babel/core": "^7.12.3",
    "@babel/node": "^7.12.1",
    "@babel/polyfill": "^7.12.1",
    "@babel/preset-env": "^7.12.1",
    "babel-loader": "^8.1.0",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.6"
  }
```


```js
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
```

그런데 이전에 express미들웨어에서의 app.js에서는 body-parser를 사용하지 않았다.

익스프레스 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장되었기 때문이다.

그래서 body-parser를 설치하지 않고도 다음과 같이 할 수 있다.

```js
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));
```

단, body-parser가 필요한 경우도 있다. body-parser는 
JSON과 URL-encoded 형식의 본문 외에도 
Raw, Text형식의 본문을 추가로 해석할 수 있다.


```git
    "ejs-lint": "^1.1.0",
```

https://simjaejin.tistory.com/31
