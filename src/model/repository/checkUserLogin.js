import db from "../database/db.js";

const checkUserInDb = async (email) => {
  // check user dalam database

  const [isUser] = await db.query("select * from users where email = ?", [
    email,
  ]);

  if (isUser.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};

export default checkUserInDb;
