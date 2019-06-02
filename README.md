#WeTube

Cloning YouTube

#git
git init

git remote add origin https://github.com/HyeonwooCHOI/wetube.git

git add .

git commit -m "Initial Commit"

git push origin master

#babel
babel은 최신 javascript 언어를 표준으로 변환해주는것

@babel/core @babel/node @babel/preset-env 설치
.babelrc 파일 생성 및 작성

#dependecies랑 상관 없이 개발자에게만 편하게 해주는거 설치 할 때
npm install nodemon -D

#morgan
log 정보를 얻을 수 있음(parameter에따라 정보양 달라짐)

#helmet
보안을 위한 것 / 설치 후 그냥 미들웨어로 한 번 실행되게 하면됨.

#body-parser
Form에 의해 정보가 받아질 경우 request Object 안에 가지고 있게 함

#cookie-parser
cookie에 유저 정보를 저장 => session을 다루기 위해

#MVC
Model: data ===> database
View: how does the data look
Controller: function that looks for the data

#pug

- express의 view engine 설정
- views 폴더에서 자동으로 가져옴 => view폴더 생성
- render로 가져오기 => rendr([pug파일명], {보낼데이터})
- #{} 안에다 자바스크립 작업 가능

#mongoos

- mongoDB와 JS의 NodeJs를 연결하기 위한 어댑터
- mongoose.connect로 mongoDB 서버 연결
- mongoose.connection으로 DB 연결
- mongoose.Schema로 스키말 생성
- mongoose.model("테이블명", "스키마") 로 생성

#dotenv

- 호스팅 할 때 ex)몽공DB 주소를 가려줌
- 무언가를 숨기고 싶을 때 사용
- .env 파일에 숨기고 싶은 정보를 저장 후
- dotenv를 import 하고
- dotenv.config() 함수를 실행시켜 process.env.변수이름
- 으로 사용하기
- .env 파일을 꼭! .gitignore에 저장

#multer

- middleware 이다
- file의 URL을 반환
- 여기서는 post로 routes.upload를 접근하면
  multer를 한번거치고(uploadVideo) postUpload실행

#express.static("폴더명")

- multer({ dest: "uploads/videos/" }); 이러면
  url이 /uploads/videos로 될껀데
  router에는 이러한 url이 없어서 에러가 발생하므로
  app.use("/uploads", express.static("uploads"));
  static file을 사용하여 폴더명으로 인식하게 한다.

#ESLint

- 코드 스타일을 자동으로 정렬

#webpack

- npm install webpack => webpack을 사용하기 위한
- npm install webpack-cli => 터미널에서 webpack을 사용하기 위한
- webpack.config.js 파일 생성(server code와 연관X / 100% client code / old js 사용)
- srcipts 부분 변경 => dev:server 와 dev:assets(webpack을 불러옴 자동으로 webpack.config.js 파일 불러옴)

#Passport

- 인증 미들웨어
- 쿠키를 생성하고 브라우저에 저장 한 후 유저에게 해당 쿠키를 줄 것임
  #Cookie
- 우리가 브라우저에 저장 할 수 있는 것
- req가 일어나면 브라우저가 자동으로 쿠키들을 서버로 전송

#Passport-LocalMongoose

- 패스워드 설정, 확인 등을 자동적으로 해줌

#passport passport-local

- 설치

#serializeUser

- 어떤 field가 쿠키에 포함될 것인지 알려주는 역할

#deserializeUser

- 어느 사용자인지 어떻게 찾는가
