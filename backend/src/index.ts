import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/user.route";

const app = express();

app.use(express.json());
app.use(cors());
const port = parseInt(process.env.PORT as string, 10);
const mongoUri = process.env.MONGODB_CONNECTION_STRING as string;

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log(`MongoDB is connected!`);
  })
  .catch((err) => {
    process.exit(1);
    console.error("MongoDB connection error:", err);
  });

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello!",
  });
});

//
app.use("/api/my/user", myUserRoute);

app.listen(port, () => {
  console.log("Server running at port: " + port);
});
