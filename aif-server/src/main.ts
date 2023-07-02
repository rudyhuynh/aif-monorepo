import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes";
import { initGraphQLClient } from "./services/graphQLClient";

const port = process.argv[2];

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public"));
}

async function main() {
  initGraphQLClient();

  routes(app);

  app.listen(port, function () {
    console.log(`Server started at http://localhost:${port} !`);
  });
}

main();
