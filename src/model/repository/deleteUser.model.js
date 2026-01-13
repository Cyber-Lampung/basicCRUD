import db from "../database/db.js";

const DeleteUserModel = async (userId) => {
  // searching user in db

  const [searchUser] = await db.query("delete from users where userId = ?", [
    userId,
  ]);

  if (searchUser.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};

export default DeleteUserModel;
