import checkUserInDb from "../model/repository/checkUserLogin.js";

const loginService = async (req, res, next) => {
  // validasi jika req.body kosong
  //   if (await !req.body) {
  //     return { status: "invalid", message: "not empty all" };
  //     // return errorBody;
  //   }
  // ambil inputan user dari req.body
  const { email, password } = req.body;

  if (!email || !password) {
    return { status: false, message: "inputan not valid empety" };
  }

  // memvalidasi user dalam database untuk validasi

  const isUserCheck = await checkUserInDb(email);

  if (isUserCheck) {
    return { status: true, message: "berhasil login" };
  } else {
    return { status: false, message: "user not found" };
  }
};

export default loginService;
