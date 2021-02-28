import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';
import logging from '../config/logging';

// TODO refine Schema later
const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true, min: 2, max: 50 },
    email: { type: String, required: true, min: 2, max: 50 },
    password: { type: String, required: true, min: 2, max: 50 },
    role: { type: String, required: true, min: 2, max: 50 },
    extraInformation: { type: String, required: true, min: 2, max: 50 }
  },
  {
    timestamps: true
  }
);

UserSchema.post<IUser>('save', function () {
  logging.info('Mongo', 'Checkout the user we just saved: ', this);
});

export default mongoose.model<IUser>('User', UserSchema);
// <IUser> interface
