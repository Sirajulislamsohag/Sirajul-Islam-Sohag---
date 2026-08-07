import mongoose, { Schema, Document } from 'mongoose';

export interface ICertificate extends Document {
  title: string;
  image?: string;
  category?: string;
  issuer?: string;
  issuingOrg?: string;
  date?: string;
  issueDate?: string;
  url?: string;
  credentialUrl?: string;
  credentialId?: string;
  description?: string;
  createdAt: Date;
}

const CertificateSchema = new Schema<ICertificate>({
  title: { type: String, required: true },
  image: { type: String, default: '' },
  category: String,
  issuer: String,
  issuingOrg: String,
  date: String,
  issueDate: String,
  url: String,
  credentialUrl: String,
  credentialId: String,
  description: String,
}, { timestamps: true });

export const CertificateModel = mongoose.models.Certificate || mongoose.model<ICertificate>('Certificate', CertificateSchema);
