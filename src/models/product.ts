import mongoose, { Schema } from 'mongoose';
import IProduct from '../interfaces/product';
import logging from '../config/logging';

// TODO refine Schema later
const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true, min: 2, max: 50 },
    brand: { type: String, required: true, min: 2, max: 50 },
    corporation: { type: String, required: true, min: 2, max: 50 },
    barcode: { type: String, required: true, min: 2, max: 50 },
    state: { type: String, required: true, min: 2, max: 50 }
  },
  {
    // mongoose option
    timestamps: true
  }
);

ProductSchema.post<IProduct>('save', function () {
  logging.info('Mongo', 'Checkout the product we just saved: ', this);
});

export default mongoose.model<IProduct>('Product', ProductSchema);
