import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import { router } from '../routers';
import ApiError from 'src/errors';

const { PORT } = process.env;

const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(router);

  app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ApiError) {
      return response.status(error.status).json({ message: error.message });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`,
    });
  });

  app.listen(PORT || 8080, () => {
    console.log(`🔥 Server Running on http://localhost:${PORT}`);
  });
};

export { startServer };
