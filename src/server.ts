import { attachControllers } from "@decorators/express";
import { injectAll, singleton } from "tsyringe";
import express, { Express } from "express";
import { TController } from "./decorators/controller";
import "./controllers/rootController";

@singleton()
export class Server {
  #port: number = process.env.PORT || 3000;

  #app: Express = express();

  constructor(@injectAll("Controller") private controllers: Array<TController>) {}

  start() {
    attachControllers(this.#app, this.controllers);
    this.#app.listen(this.#port, this.#onServerStarted.bind(this));
  }

  #onServerStarted() {
    console.log(`[server]: Server is running at http://localhost:${this.#port}`);
  }
}
