const e = require("express");
var express = require("express");
var router = express.Router();

// 유저 DB 임의 생성
const userInfo = {
  lee: {
    password: "123123",
  },
  kim: {
    password: "456456",
  },
};

// 로그인이 완료되었다면 session.username을 같이 담아 보낸다.
// 로그인이 안되었다면 session.username이 null 값으로 보내진다.
router.get("/", (req, res) => {
  const session = req.session;
  res.render("index", {
    username: session.username,
  });
});

// 원래는 POST method로 username과 password를 보내야 한다.
router.get("/login/:username/:password", (req, res) => {
  const session = req.session;
  const {username, password} = req.params;
  if (!userInfo[username]) {
    res.status(400).json({
      message: "user not found",
    });
  }

  if (userInfo[username]["password"] === password) {
    session.username = username;
    res.status(200).json({
      message: "user login!!",
    });
  } else {
    res.status(400).json({
      message: "user pw incorrect!!",
    });
  }
});

router.get("/logout", (req, res) => {
  const session = req.session;
  if (session.username) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/users");
      }
    });
  } else {
    res.redirect("/login");
  }
});
module.exports = router;
