import { Controller as controllerDecorator, attachControllers } from "@decorators/express";
import { container } from "tsyringe";

export type TController = Parameters<typeof attachControllers>[1][number];
type TControllerDecorator = typeof controllerDecorator;

export const ApiCrontroller: TControllerDecorator = function (...args: Parameters<TControllerDecorator>) {
  return (target: TController) => {
    controllerDecorator(...args)(target);
    container.register("Controller", { useValue: target });
  };
} as TControllerDecorator;
