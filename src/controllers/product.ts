import { Request, Response, NextFunction } from 'express';
// import logging from '../config/logging';
import Product from '../models/product';

const NAMESPACE = 'Sample Controller';

const getAllProducts = (req: Request, res: Response, next?: NextFunction) => {
  // logging.info(NAMESPACE, `Sample health check route called.`);
  // return res.status(200).json({
  //   message: 'controller is being called'
  // });
  Product.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        products: results,
        count: results.length
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

export default { getAllProducts };
