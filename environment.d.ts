declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Specify here the .env keys you want to be show in intellisense
      PORT: number;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
