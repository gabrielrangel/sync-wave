import { Get, Response } from "@decorators/express";
import { ApiCrontroller } from "../decorators/controller";
import { Response as TResponse } from "express";

@ApiCrontroller("/")
export class RootController {
  @Get("/")
  get(@Response() res: TResponse) {
    res.send("Express + TypeScript Server");
  }
}
