import express from "express";
import cors from "cors";
import shinyRouter from "./router/shinyRouter.js";

const server = express();
const port = 8080;

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use("/uploads", express.static("uploads"));

server.use("/shiny", shinyRouter);

server.listen(port, () => {
  console.log(`welcome ${port} server start`);
});
