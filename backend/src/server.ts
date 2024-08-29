import express from "express";
import cors from "cors";
import { initialiseRoute } from "./routes";
const app = express();
const PORT = process.env.PORT || 4000;

const startServer = () => {
  app.use(express.json());
  app.use(cors());

  initialiseRoute(app);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
