import express from "express";
import { PORT } from "./config.js";
import connectDB from "./db/index.js";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();

const port = PORT || 8000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to CMS Server");
});

app.use("/task", taskRoutes);

connectDB()
  .then(() => {
    app.listen(port, (err) => {
      err
        ? console.log("Server connection error")
        : console.log(
            `Successfully connected to Server http://localhost:${port}`
          );
    });
  })
  .catch((err) => console.log(err));
