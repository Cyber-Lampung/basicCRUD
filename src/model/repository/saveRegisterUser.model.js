import db from "../database/db.js";

const saveRegisterUer = async (
  userId,
  email,
  username,
  password,
  sessionId,
  create_at,
  expires_at,
  isVerif,
) => {
  // save user dalama database

  const [saveUser] = await db.query(
    "insert into users (user_id, email, username, password, created_at, isVerif) values (?, ?, ?, ?, ?, ?)",
    [userId, email, username, password, create_at, isVerif],
  );

  const [saveSession] = await db.query(
    "insert into sessions (session_id, user_id, created_at, expires_at) values (?, ?, ?, ?)",
    [sessionId, userId, create_at, expires_at],
  );

  // console.table(saveSession[0]);

  // console.log(await saveSession[0]); // => testing

  if (saveUser.affectedRows > 0 && saveSession.affectedRows > 0) {
    return { status: true, session: sessionId };
  } else {
    return { status: false };
  }
};

export default saveRegisterUer;
