import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  ip?: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  company: String,
  service: { type: String, required: true },
  budget: { type: String, required: true },
  message: String,
  status: { type: String, default: 'new', enum: ['new', 'read', 'replied', 'archived'] },
  ip: String,
}, { timestamps: true });

export const ContactModel = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
