import db from "../database/db.js";

const saveRegisterUer = async (
  userId,
  email,
  username,
  password,
  sessionId,
  create_at
) => {
  // save user dalama database

  const [saveUser] = await db.query(
    "insert into users (userId, email, username, password) values (?, ?, ?, ?)",
    [userId, email, username, password]
  );

  const [saveSession] = await db.query(
    "insert into sessions (userId, sessionId, created_at) values (?, ?, ?)",
    [userId, sessionId, create_at]
  );

  // console.log(saveUser); => testing

  if (saveUser.affectedRows > 0 && saveSession.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};

export default saveRegisterUer;
