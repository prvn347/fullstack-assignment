import {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import { cardController } from "../controllers/card";

const router = Router();
const cardControllers = new cardController();
router.post("/", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await cardControllers.createCard(body);
    if (result instanceof Error) {
      return res.status(403).json({ error: "error while creating room" });
    }
    return res.status(201).json({
      result,
    });
  } catch (error) {
    res.status(403).json({ error: error });
  }
});
router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await cardControllers.getAllCards();
    if (result instanceof Error) {
      return res.status(403).json({ error: "error while getting cards" });
    }
    return res.status(201).json({
      result,
    });
  } catch (error) {
    res.status(403).json({ error: error });
  }
});
router.get("/:title", async (req: Request, res: Response) => {
  try {
    const title = req.params.title;
    const result = await cardControllers.getCardDetails(title);
    if (result instanceof Error) {
      return res.status(403).json({ error: "error while getting cards" });
    }
    return res.status(201).json({
      result,
    });
  } catch (error) {
    res.status(403).json({ error: error });
  }
});
router.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
    res.status(500).send("Something broke!");
  }
);

export default router;
