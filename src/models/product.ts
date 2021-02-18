import mongoose, { Schema } from 'mongoose';
import Product from '../interfaces/product';

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

export default mongoose.model<Product>('Product', ProductSchema);
