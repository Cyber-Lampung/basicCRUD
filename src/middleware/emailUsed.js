import checkEmailUsedService from "../services/checkEmailUsed.service.js";

const emailUsed = async (req, res, next) => {
  //   check email dalam service dan balikan response kesini

  const { used, message } = await checkEmailUsedService(req);

  if (used === true) {
    return res.status(409).json({ status: 409, message: message });
    !next();
  }

  next();
};

export default emailUsed;
