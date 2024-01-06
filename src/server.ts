import { attachControllers } from "@decorators/express";
import { inject, singleton } from "tsyringe";
import express, { Express } from "express";
import { Controllers } from "./controllers";

@singleton()
export class Server {
  #port: number = process.env.PORT ?? 3000;

  #app: Express = express();

  constructor(@inject(Controllers) private controllers: Controllers) {}

  start() {
    attachControllers(this.#app, this.controllers.list);
    this.#app.listen(this.#port, this.#onServerStarted.bind(this));
  }

  #onServerStarted() {
    console.log(`[server]: Server is running at http://localhost:${this.#port}`);
  }
}
