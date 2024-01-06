import { inject, singleton } from "tsyringe";
import { Server } from "./server";

@singleton()
export class App {
  constructor(@inject(Server) private server: Server) {}

  start() {
    this.server.start();
  }
}
