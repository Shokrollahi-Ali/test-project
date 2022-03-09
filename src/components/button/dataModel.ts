export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ProgressButtonProps {
  progress: number;
  disabled?: boolean;
  submitButtonClick: () => void;
}
