import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
	console.log(request.body)
	response.status(200).send({ "message": "Success" });
});

app.listen(3333, () => {
	console.log("Start");
});