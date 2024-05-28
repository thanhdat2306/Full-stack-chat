import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectMongo from "./db/db.js";
import { app, server } from "./socket/socket.js";
 

dotenv.config();
app.use(express.json()); // json verileri almak icin postman degerlere erismek icin     
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    connectMongo();
    console.log(`Server Running on ${PORT}`)
});