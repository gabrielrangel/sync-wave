declare module "sync-wave" {
  declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number;
      }
    }
  }
}
