import MuButton from './MuButton';
import submit from '../../assets/images/submit.svg';
import { ProgressButtonProps } from './dataModel';

const MuProgressButton: React.FC<ProgressButtonProps> = ({
  progress,
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
          // disabled={isButtonDisable}
          onClick={submitButtonClick}
        >
          <img src={submit} alt='submit' />
        </MuButton>
      </div>
    </div>
  );
};
export default MuProgressButton;
