import { Request, Response, NextFunction } from 'express';
// import logging from '../config/logging';
import mongoose from 'mongoose';
import Product from '../models/product';

// const NAMESPACE = 'Sample Controller';

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

const createProduct = (req: Request, res: Response, next: NextFunction) => {
  let { name, brand, corporation, barcode, state } = req.body;

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name,
    brand,
    corporation,
    barcode,
    state
  });

  return product
    .save()
    .then((result) => {
      return res.status(201).json({
        book: result
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

export default { getAllProducts, createProduct };
