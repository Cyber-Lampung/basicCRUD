import getUserService from "../services/getUser.service.js";

const getUserController = async (req, res, next) => {
  const isCheckUser = await getUserService();

  if (isCheckUser) {
    return res
      .status(200)
      .json({ status: "succes", statusCode: 200, data: isCheckUser });
  } else {
    return res
      .status(404)
      .json({ status: "user belum ditemukan", statusCode: 404 });
  }
};

export default getUserController;
