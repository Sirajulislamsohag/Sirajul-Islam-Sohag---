import { Modal } from './modal';
import { Button } from './button';
import { AlertTriangle } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'primary';
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger'
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="flex flex-col items-center text-center pb-2">
        <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${variant === 'danger' ? 'bg-danger/10 text-danger' : 'bg-primary/10 text-primary'}`}>
          <AlertTriangle className="w-6 h-6" />
        </div>
        <p className="text-[var(--text-secondary)] text-sm mb-6">{message}</p>
        
        <div className="flex gap-3 w-full">
          <Button variant="ghost" className="flex-1" onClick={onClose}>
            {cancelText}
          </Button>
          <Button variant={variant} className="flex-1" onClick={() => { onConfirm(); onClose(); }}>
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
