import saveRegisterUer from "../model/repository/saveRegisterUser.model.js";
import createdDateTime from "../utils/createdDateTime.utils.js";
import createSessionId from "../utils/generateSession.utils.js";
import generateUUID from "../utils/generateUUID.js";
import bcryptPassword from "../utils/hashPassword.js";

const UserRegister = async (req) => {
  // ambil function untuk hash password
  const { hashPassword } = await bcryptPassword();
  const { dateTimeNow, expires_at } = createdDateTime();

  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return false;
  }

  const userId = generateUUID();

  // hash password

  const passwordHash = await hashPassword(password);

  // sessionId
  const sessionId = await createSessionId(userId, "7d");

  // set iVerif

  const isVerif = false;

  // create dateTime dan expires_time

  const create_at = dateTimeNow();
  const expires = expires_at();

  const check = await saveRegisterUer(
    userId,
    email,
    username,
    passwordHash,
    sessionId,
    create_at,
    expires,
    isVerif,
  );

  if (check.status === true) {
    return { status: true, session: check.session };
  } else {
    return { status: false };
  }
};

export default UserRegister;
