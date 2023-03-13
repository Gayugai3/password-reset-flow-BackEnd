import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routes/users.route.js";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
//mongo connection
const MONGO_URL = process.env.DB;
export const client = new MongoClient(MONGO_URL);
client.connect();
console.log("mongo connected");

app.get("/", function (request, response) {
  response.send("Password Reset Flow API");
});

app.use("/user", usersRouter);

app.listen(PORT, () => console.log("app started in PORT", PORT));
