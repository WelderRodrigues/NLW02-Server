import express, { json } from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ msg: "Ola mundo" });
});

app.listen(3333);
