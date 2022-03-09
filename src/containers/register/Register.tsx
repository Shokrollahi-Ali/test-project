import { useEffect, useState } from 'react';
import MuProgressButton from '../../components/button/MuProgressButton';
import MuAutoComplete from '../../components/input/autoComplete/MuAutoComplete';
import MuTextField from '../../components/input/textField/MuTextField';
import MuTypography from '../../components/typography/MuTypography';
import { mockData } from '../../configs/mockData';
import { numberOfLetters } from '../../helpers/validationHelpers';
import useEmail from '../../hooks/use-email';
import useInput from '../../hooks/use-input';
import { registerTranslation } from '../../resources/translations';

const Register = () => {
  const {
    email,
    isTouched: isEmailTouched,
    isEmailFormatValid,
    isLettersValid,
    emailHelperText,
    handleEmailChange,
    emailBlurHandler,
  } = useEmail();

  const {
    value: postalCode,
    isTouched: isInputTouched,
    isValid: isPostalCodeValid,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
  } = useInput('', numberOfLetters);

  const [selectedCity, setSelectedCity] = useState();

  const [selectedProvince, setSelectedProvince] = useState();

  const [isButtonEnable, setIsButtonDisabled] = useState(true);

  const progress = [
    isEmailTouched && isEmailFormatValid,
    isInputTouched && isPostalCodeValid,
    selectedCity,
    selectedProvince,
  ].filter((item) => item).length;

  useEffect(() => {
    if (progress === 0) return;
    setIsButtonDisabled(progress === 4);
  }, [progress]);

  const cityChangeHandler = (e: any, value: any) => {
    setSelectedCity(value);
  };

  const provinceChangeHandler = (e: any, value: any) => {
    setSelectedProvince(value);
  };

  const submitButtonClick = () => {
    setIsButtonDisabled(progress === 4);
  };
  return (
    <div className='register'>
      <MuTypography className='primary-text'>
        {registerTranslation.primaryText}
      </MuTypography>
      <MuTypography className='secondary-text'>
        {registerTranslation.secondaryText}
      </MuTypography>
      <MuTextField
        label={registerTranslation.emailAddressPlaceholder}
        value={email}
        onChange={handleEmailChange}
        onBlur={emailBlurHandler}
        error={!isEmailFormatValid || !isLettersValid}
        helperText={emailHelperText}
        type='email'
      />
      <MuAutoComplete
        id='city'
        label={registerTranslation.selectCity}
        options={mockData.cityOptions}
        value={selectedCity}
        onChange={cityChangeHandler}
      />
      <MuAutoComplete
        id='province'
        label={registerTranslation.selectProvince}
        options={mockData.provinceOptions}
        value={selectedProvince}
        onChange={provinceChangeHandler}
      />
      <MuTextField
        label={registerTranslation.postalCodePlaceholder}
        value={postalCode}
        error={!isPostalCodeValid}
        onChange={postalCodeChangeHandler}
        onBlur={postalCodeBlurHandler}
        helperText={
          isPostalCodeValid
            ? ''
            : registerTranslation.postalCodeMustBeTenLetters
        }
      />
      <MuProgressButton
        progress={progress}
        disabled={!isButtonEnable}
        submitButtonClick={submitButtonClick}
      />
    </div>
  );
};

export default Register;
