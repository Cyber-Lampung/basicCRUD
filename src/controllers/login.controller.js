import loginService from "../services/login.service.js";

const loginController = async (req, res, next) => {
  // kirim semua ke service dan balikan kembali ke controller dalam bentuk response

  const validasi = await loginService(req, res, next);

  //   console.log(validasi); => testing

  if (validasi.status) {
    return res.status(200).json({ status: 200, message: "succes login" });
  } else {
    return res.status(404).json({ status: 404, message: validasi.message });
  }
};

export default loginController;
