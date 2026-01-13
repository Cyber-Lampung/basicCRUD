import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
dotenv.config({ debug: true });

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(helmet());
const PORT = process.env.PORT;

// import Route

import userRoutes from "./routes/user.routes.js";

// app

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server berjalan pada port ${PORT}`);
});
