import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

// ALl  Application routes
// app.use("/api/v1/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// app.use(appError);
app.use(notFound);

export default app;
