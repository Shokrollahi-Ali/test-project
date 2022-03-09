import Button from '@mui/material/Button';
import { ButtonProps } from './dataModel';

const MuButton: React.FC<ButtonProps> = ({
  className,
  disabled,
  onClick,
  children,
}) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      disabled={disabled}
      fullWidth
    >
      {children}
    </Button>
  );
};

export default MuButton;
