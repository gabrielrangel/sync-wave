import { DependencyContainer, container, inject, singleton } from "tsyringe";
import { Server } from "./server";
import { Controllers } from "./controllers";

@singleton()
export class App {
  static container: DependencyContainer = container;

  constructor(@inject(Server) private server: Server) {}

  start() {
    this.server.start();
  }

  static async config() {
    await Controllers.config();
    return App.container.resolve(App);
  }
}
