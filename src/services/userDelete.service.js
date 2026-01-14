import DeleteUserModel from "../model/repository/deleteUser.model.js";

const DeleteAccountService = async (req) => {
  const userId = req.params.id;

  // testing jika userId kosong
  // if (!userId) {
  //   return { status: "paramError", message: "userId not empety" };
  // }

  //   kirim userId ke model untuk di check
  const serchUser = await DeleteUserModel(userId);

  if (serchUser) {
    return { status: "succes", message: "succes delete users" };
  } else {
    return {
      status: "invalid",
      message: "invalid delete user, user not found",
    };
  }
};

export default DeleteAccountService;
