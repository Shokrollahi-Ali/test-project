import TextField from '@mui/material/TextField';
import { TextFieldProps } from './dataModel';

const MuTextField: React.FC<TextFieldProps> = ({
  value,
  type,
  label,
  defaultValue,
  helperText,
  id,
  disabled,
  error,
  className,
  onChange,
  onBlur,
}) => {
  return (
    <TextField
      error={error}
      fullWidth
      type={type}
      value={value}
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
      id={id}
      disabled={disabled}
      className={`text-field ${className}`}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default MuTextField;
