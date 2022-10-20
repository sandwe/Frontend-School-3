const loginCheck = (req, res, next) => {
  // 유저 로그인 여부
  const userLogin = true;
  if (userLogin) {
    next(); // 로그인된 유저이면 다음 라우터로 넘긴다.
  } else {
    res.status(400).json({
      message: "login failed",
    });
  }
};

module.exports = loginCheck;
