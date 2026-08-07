import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  type: 'contact' | 'client' | 'system';
  title: string;
  message: string;
  read: boolean;
  relatedId?: string;
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>({
  type: { type: String, required: true, enum: ['contact', 'client', 'system'] },
  title: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  relatedId: String,
}, { timestamps: true });

export const NotificationModel = mongoose.models.Notification || mongoose.model<INotification>('Notification', NotificationSchema);
