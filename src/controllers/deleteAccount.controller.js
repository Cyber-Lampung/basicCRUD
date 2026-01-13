import DeleteAccountService from "../services/userDelete.service.js";

const DeleteAccount = async (req, res, next) => {
  const { status, message } = await DeleteAccountService(req);
  console.log(status, message);

  if (status == "succes") {
    return res.status(200).json({ status: 200, message: message });
  } else {
    return res.status(404).json({ status: 404, message: "user not found" });
  }
};

export default DeleteAccount;
