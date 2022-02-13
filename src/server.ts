import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: express.Application = express();
const port = 5050;
const address: string = `127.0.0.1:${port}`;

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req: Request, res: Response) {
  res.send('Welcome to the API!');
});

app.listen(port, function () {
  console.log(`Server started running on ${address}`);
});
