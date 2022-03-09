export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ProgressButtonProps {
  progress: number;
  submitButtonClick: () => void;
}
