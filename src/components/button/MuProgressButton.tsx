import submit from '../../assets/images/submit.svg';
import { commonTranslation } from '../../resources/translations';
import MuTypography from '../typography/MuTypography';
import { ProgressButtonProps } from './dataModel';
import MuButton from './MuButton';

const MuProgressButton: React.FC<ProgressButtonProps> = ({
  progress,
  disabled,
  submitButtonClick,
}) => {
  return (
    <div className='register_button'>
      {progress >= 1 && <div className='square top-left'></div>}
      {progress >= 2 && <div className='square top-right'></div>}
      {progress >= 3 && <div className='square bottom-right'></div>}
      {progress === 4 && <div className='square bottom-left'></div>}
      <div className='button-wrapper'>
        <MuButton
          className='button'
          disabled={disabled}
          onClick={submitButtonClick}
        >
          <img src={submit} alt='submit' />
        </MuButton>
      </div>
      {disabled && (
        <MuTypography className='helper-text'>
          {commonTranslation.allFieldsMustBeFilled}
        </MuTypography>
      )}
    </div>
  );
};
export default MuProgressButton;
