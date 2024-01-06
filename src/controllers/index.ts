import path from "path";
import { promisify } from "util";
import { readdir } from "fs";
import { injectAll, singleton } from "tsyringe";
import { TController } from "../decorators/controller";

@singleton()
export class Controllers {
  static async config() {
    await Promise.all(this.controllersIterator(await promisify(readdir)(__dirname)));
  }

  constructor(@injectAll("Controller") public list: Array<TController>) {}

  private static *controllersIterator(fileNames: Array<string>) {
    const currentFileName = path.basename(__filename);

    for (const fileName of fileNames) {
      if (fileName === currentFileName) continue;
      yield import(path.resolve(__dirname, fileName));
    }
  }
}
