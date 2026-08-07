import mongoose, { Schema, Document } from 'mongoose';

export interface IClient extends Document {
  name: string;
  company: string;
  logo?: string;
  email?: string;
  phone?: string;
  status: 'new' | 'active' | 'inactive';
  projectStatus: 'pending' | 'in-progress' | 'completed' | 'on-hold';
  notes?: string;
  timeline: { date: string; event: string; description: string }[];
  createdAt: Date;
  updatedAt: Date;
}

const ClientSchema = new Schema<IClient>({
  name: { type: String, required: true },
  company: { type: String, required: true },
  logo: String,
  email: String,
  phone: String,
  status: { type: String, default: 'new', enum: ['new', 'active', 'inactive'] },
  projectStatus: { type: String, default: 'pending', enum: ['pending', 'in-progress', 'completed', 'on-hold'] },
  notes: String,
  timeline: [{ date: String, event: String, description: String }],
}, { timestamps: true });

export const ClientModel = mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);
