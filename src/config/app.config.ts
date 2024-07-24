export const AppConfig = () => ({
  environment: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI,
  mongoDbName: process.env.MONGO_DB_NAME,
  port: +process.env.PORT,
  defaultLimit: +process.env.DEFAULT_LIMIT,
});
