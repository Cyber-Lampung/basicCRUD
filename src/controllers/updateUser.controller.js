import updateUserService from "../services/updateUser.service.js";

const updateUserController = async (req, res, next) => {
  // service update user

  const status = await updateUserService(req);

  if (status === false) {
    return res.status(409).json({ status: 409, message: "gagal update user" });
  }

  return res.status(200).json({ status: 200, message: "berhasil update user" });
};

export default updateUserController;
