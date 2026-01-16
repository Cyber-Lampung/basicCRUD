const checkTokenHeader = (req, res, next) => {
  // check token

  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res
      .status(403)
      .json({ status: 403, message: "token tidak valid anda dilarang masuk" });
  }

  next();
};

export default checkTokenHeader;
