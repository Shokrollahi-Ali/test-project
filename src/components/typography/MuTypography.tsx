import Typography from '@mui/material/Typography';
import { TypographyProps } from './dataModel';

const MuTypography: React.FC<TypographyProps> = ({
  className,
  gutterBottom,
  children,
}) => {
  return (
    <Typography className={className} gutterBottom={gutterBottom}>
      {children}
    </Typography>
  );
};

export default MuTypography;
