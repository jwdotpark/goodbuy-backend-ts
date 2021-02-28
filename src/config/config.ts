import dotenv from 'dotenv';

// TODO currently .env isn't loaded
// https://stackoverflow.com/questions/45194598/using-process-env-in-typescript

dotenv.config();

const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 300000,
  socketTimeoutMS: 300000,
  keepAlive: true,
  poolSize: 50,
  autoIndex: false,
  retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOST = process.env.MONGO_URL;
// https://stackoverflow.com/questions/61463771/mongoparseerror-unescaped-slash-in-userinfo-section

const MONGO = {
  host: MONGO_HOST,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  options: MONGO_OPTIONS,
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}${MONGO_HOST}`
  // FIXME delete env var later
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT
};

const config = {
  mongo: MONGO,
  server: SERVER
};

// console.log(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}${MONGO_HOST}`);

export default config;
