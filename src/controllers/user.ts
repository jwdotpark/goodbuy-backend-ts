// adding user controller
import { Request, Response, NextFunction } from 'express';
// import logging from '../config/logging';
import mongoose from 'mongoose';
import User from '../models/user';

const getAllUsers = (req: Request, res: Response, next?: NextFunction) => {
  User.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        users: results,
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

const createUser = (req: Request, res: Response, next?: NextFunction) => {
  let { name, email, password, role } = req.body;
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
    password,
    role
  });
  return user
    .save()
    .then((result) => {
      return res.status(201).json({
        user: result
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error
      });
    });
};

export default { getAllUsers, createUser };
