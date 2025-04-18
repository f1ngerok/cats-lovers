declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_HOST: string;
      API_SECRET_KEY: string;
      APP_PORT: string;
      APP_VERSION: string;
      IMAGE_HOST: string;
      NODE_ENV: 'development' | 'production';
      WS_API_HOST: string;
    }
  }
}
