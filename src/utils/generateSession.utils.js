import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const createSessionId = (userId) => {
  // created payload
  const payload = { userId: userId };

  // ambil secret key dari dotenv
  const secretKey = process.env.secretKey;

  return jwt.sign(payload, secretKey, { algorithm: "HS256" });
};

export default createSessionId;
