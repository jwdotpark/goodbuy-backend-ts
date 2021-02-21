import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import productRoutes from './routes/product';
import mongoose from 'mongoose';

const NAMESPACE = 'Server';
const router = express();

// Connect to Mongo
mongoose
  .connect(config.mongo.url, config.mongo.options)

  // FIXME every env var should be defined within interface
  // .connect(
  //   'mongodb+srv://user:8rcV7TSq26d6xsm@cluster0.rtgin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  //   config.mongo.options
  // )

  .then((result) => {
    logging.info(NAMESPACE, 'Connected to mongoDB.');
  })
  .catch((error) => {
    logging.error(NAMESPACE, error.message, error);
  });

// log request middleware
router.use((req, res, next) => {
  // log req
  logging.info(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  // listener when anything is finished
  res.on('finish', () => {
    // log res
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    );
  });

  next();
});

// Parse the body of the request and allow sending json message api
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// API rule
router.use((req, res, next) => {
  // req confirmed anywhere but need to be predefined on production
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});

// Routes
router.get('/', (req, res) => {
  res.send('hi');
});
router.use('/api/products', productRoutes);
// localhost:1337/api/product/check

// Error handling
router.use((req, res, next) => {
  const error = new Error('Not found');

  res.status(404).json({
    message: error.message
  });
});

// Create server
const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () =>
  logging.info(
    NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`
  )
);
