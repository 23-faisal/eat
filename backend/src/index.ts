import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello!",
  });
});

app.listen(port, () => {
  console.log("Server running at port: " + port);
});
