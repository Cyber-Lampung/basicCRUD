import DeleteAccountService from "../services/userDelete.service.js";

const DeleteAccount = async (req, res, next) => {
  const { status, message } = await DeleteAccountService(req);
  // console.log(status, message);

  // if (status === "paramError") {
  //   return res.status(429).json({ status: 429, message: message });
  // }

  try {
    if (status == "succes") {
      return res.status(200).json({ status: 200, message: message });
    } else {
      return res.status(404).json({ status: 404, message });
    }
  } catch {
    return res.json("Invalid Parameter");
  }
};

export default DeleteAccount;
