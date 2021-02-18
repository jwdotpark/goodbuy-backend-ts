import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 30000,
  keepAlive: true,
  poolSize: 50,
  autoIndex: false,
  retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'user';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'password';
const MONGO_HOST =
  process.env.MONGO_URL ||
  'mongodb%2Bsrv%3A%2F%2Fuser%3Apassword%40goodbuy.tepss.mongodb.net%2Fgoodbuy%3FretryWrites%3Dtrue%26w%3Dmajority';
// https://stackoverflow.com/questions/61463771/mongoparseerror-unescaped-slash-in-userinfo-section

const MONGO = {
  host: MONGO_HOST,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  options: MONGO_OPTIONS,
  url: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
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

export default config;
