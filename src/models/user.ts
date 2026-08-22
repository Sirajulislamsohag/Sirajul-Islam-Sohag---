import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'admin';
  failedLoginAttempts?: number;
  lockUntil?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, select: false },
  name: { type: String, required: true, trim: true },
  role: { type: String, default: 'admin', enum: ['admin'] },
  failedLoginAttempts: { type: Number, default: 0 },
  lockUntil: { type: Date },
}, { timestamps: true });

export const UserModel = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
