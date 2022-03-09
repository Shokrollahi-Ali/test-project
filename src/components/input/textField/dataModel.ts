export interface TextFieldProps {
  value?: string;
  label?: string;
  defaultValue?: string;
  helperText?: string;
  id?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}
