import express from "express";
import dotenv from "dotenv"
import rateLimit from 'express-rate-limit'

dotenv.config({})

const app = express();

const limiter = rateLimit({
	windowMs: 10000,
	max: 40, 
	standardHeaders: true,
	legacyHeaders: false,
})

app.use(limiter)

export default app;