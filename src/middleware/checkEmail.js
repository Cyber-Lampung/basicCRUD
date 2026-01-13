const checkEmail = (req, res, next) => {
  const atEmail = /(@gmail.com)/;

  // check req.body
  const { email } = req.body;

  if (atEmail.test(email) === false) {
    return res.status(409).json({ message: "invalid email" });
  }

  next();
};

export default checkEmail;
