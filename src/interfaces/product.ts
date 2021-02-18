import { Document } from 'mongoose';

export default interface Product extends Document {
  name: string;
  brand: string;
  corporation: string;
  barcode: string;
  state: string;
}
