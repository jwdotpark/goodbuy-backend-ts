import express from 'express';
import controller from '../controllers/product';

const router = express.Router();

router.get('/get/products', controller.getAllProducts);

export = router;
