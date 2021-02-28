import { Document } from 'mongoose';

export default interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  extraInformation: string;
  // var modify document after passed into mongoose
}
