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
