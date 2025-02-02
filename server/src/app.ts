import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalError';
import router from './app/routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
  }),
);
app.use(cookieParser());

// ALl  Application routes
app.use('/api/v1/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
