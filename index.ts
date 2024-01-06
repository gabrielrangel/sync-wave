import "reflect-metadata";
import dotenv from "dotenv";
import { App } from "./src/app";

dotenv.config({ path: ".env.local" });

App.config().then((app) => app.start());
