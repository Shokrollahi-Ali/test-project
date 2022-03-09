import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AutoCompleteProps } from './dataModel';

const MuAutoComplete: React.FC<AutoCompleteProps> = ({
  value,
  label,
  error,
  options,
  className,
  onChange,
}) => {
  return (
    <Autocomplete
      value={value}
      className={`auto-complete ${className}`}
      clearIcon={false}
      disablePortal
      popupIcon={<KeyboardArrowDownIcon fontSize='large' />}
      id='combo-box-demo'
      options={options}
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} error={error} label={label} />
      )}
    />
  );
};

export default MuAutoComplete;
