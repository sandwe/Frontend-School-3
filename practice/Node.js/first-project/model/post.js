const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 스키마 작성
// DB에 저장할 데이터의 타입과 default 값 정의
const postSchema = new Schema({
  title: String,
  content: String,
  create_date: {type: Date, default: new Date()},
});

module.exports = mongoose.model("post", postSchema);
