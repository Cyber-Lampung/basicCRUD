import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(helmet());

// routes
import userRoutes from "./routes/user.routes.js";
app.use("/users", userRoutes);

export default app;
