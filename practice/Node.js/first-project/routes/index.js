// 서버에 대한 로직 작성
var express = require("express");
var router = express.Router();

// 스키마 불러오기
const postModel = require("../model/post");

router.post("/", async (req, res) => {
  const {title, content} = req.body;
  // postModel은 클래스로 정의되어 있다.
  const post = new postModel({
    title: title,
    content: content,
  });
  try {
    // 저장
    // save 함수는 비동기적으로 움직인다. 언제 완료될지 모른다. async/await을 활용하자.
    const result = await post.save();
    res.status(200).json({
      message: "upload success!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// 전체 데이터 가져오기
router.get("/", async (req, res) => {
  try {
    // title이 first인 데이터를 가져온다.
    // const result = await postModel.find({title: "first"});
    const result = await postModel.find({}); // 조건 없이 모든 데이터를 가져온다.
    res.status(200).json({
      message: "read success!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// 특정 id를 갖는 데이터 가져오기
router.get("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "detail success!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// 찾은 특정 데이터 수정
router.put("/:id", async (req, res) => {
  const {id} = req.params;
  const {title, content} = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(
      id,
      {
        title: title,
        content: content,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "update success!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete successs!",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
module.exports = router;
