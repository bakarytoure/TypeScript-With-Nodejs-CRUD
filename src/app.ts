import { NextFunction } from "connect";
import express from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todo";

const app = express();
app.use(json());
//We need to connect to ouw running express application
app.use("/todos", todoRoutes);

//Regular diddleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

//listening PORT
app.listen(3000);
