import "reflect-metadata";
import dotenv from "dotenv";
import { container } from "tsyringe";
import { App } from "./src/app";

dotenv.config();
container.resolve(App).start();
