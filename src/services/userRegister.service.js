import saveRegisterUer from "../model/repository/saveRegisterUser.model.js";
import createdDateTime from "../utils/createdDateTime.utils.js";
import createSessionId from "../utils/generateSession.utils.js";
import generateUUID from "../utils/generateUUID.js";
import bcryptPassword from "../utils/hashPassword.js";

const UserRegister = async (req) => {
  // ambil function untuk hash password
  const { hashPassword } = await bcryptPassword();

  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return false;
  }

  const userId = generateUUID();

  // hash password

  const passwordHash = await hashPassword(password);

  // sessionId
  const sessionId = await createSessionId(userId);

  // create dateTime

  const dateTimeNow = await createdDateTime();

  const create_at = dateTimeNow();

  const check = saveRegisterUer(
    userId,
    email,
    username,
    passwordHash,
    sessionId,
    create_at
  );

  if (check) {
    return true;
  } else {
    return false;
  }
};

export default UserRegister;
