import UserRegister from "../services/userRegister.service.js";

const Register = (req, res, next) => {
  const result = UserRegister(req);

  if (result) {
    return res.status(201).json({
      status: 201,
      message: "succes created password",
      isVerif: false,
    });
  } else {
    return res
      .status(409)
      .json({ status: 409, message: "invalid created user" });
  }
};

export default Register;
