const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

// node.js 문법
// npm을 이용해 다운받는 패키지는 모두 node 환경
// 모듈을 밖으로 빼낸다.
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("./src/app.js"), // 시작점
  },

  // 번들링한 output을 담을 파일 위치
  output: {
    publicPath: "/webpackTest/dist/",
    filename: "[name].js", // entry에 따라 name이 바뀌도록 설정, main이 name에 들어간다.
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        // 로더가 처리해야할 파일의 패턴(정규표현식)입니다.
        // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미합니다.
        // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미합니다.
        // test: /\.js$/,
        // use: [
        //   // 위와 일치하는 패턴의 파일이 전달될 로더를 설정합니다.
        //   path.resolve("./myLoader.js"),
        // ],
      },
      {
        test: /\.css$/,
        use: [
          // 로더 등록, 맨 아래에 작성된 로더부터 실행된다.
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        // type: "asset/inline", // 인라인 문자열 포맷
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 1kb = 1024byte, 너무 복잡한 이미지를 base64로 만들면 오히려 로딩이 느려지기에 이미지의 크기에 제한을 둔다.
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      // BannerPlugin: 배너(주석)을 달아주는 플러그인
      banner: "배너입니다!!",
    }),
    new webpack.DefinePlugin({
      // 환경 변수 설정
      // pw: 12345,
      dev: JSON.stringify(process.env.DEV_API),
      pro: JSON.stringify(process.env.PRO_API),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
