const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [autoprefixer({ browsers: "cover 99.5%" })];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]
};

module.exports = config; // export default 같이 최신 사용 못함

// npm install webpack webpack-cli
// "start": "babel-node init.js"
/*
    "dev:server": "babel-node init.js",
    "dev:assets": "webpack"
    ==> 서로다른 터미널 창에서 실행 시킴
    ==> dev:assets은 실행이 되면 자동으로 webpack.config.js 파일을 찾아서 실행함 (이름 중요!)

    여기는 server code랑 연관 시키면 안됨. 100% client code
    여기서는 babel을 못쓰므로 old js 사용!

    webpack은 두 가지를 가지고 있음
    1. entry  : 파일들이 어디에서 왔는가?
    2. output : 그걸 어디에 넣는가?
*/
