import express, { json, urlencoded, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";

const { errorMiddleware } = require('./middlewares/errorMiddleware');

dotenv.config()

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(json());

app.use(urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: "Hello"})
})

// Routes

app.use(errorMiddleware)

app.listen(PORT, () => console.log(`Server starter on port ${PORT}`))
