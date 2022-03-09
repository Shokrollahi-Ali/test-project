import { useState } from 'react';
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

  const cityChangeHandler = (e: any, value: any) => {
    setSelectedCity(value);
  };

  const provinceChangeHandler = (e: any, value: any) => {
    setSelectedProvince(value);
  };

  const progress = [
    isEmailTouched && isEmailFormatValid,
    isInputTouched && isPostalCodeValid,
    selectedCity,
    selectedProvince,
  ].filter((item) => item).length;

  const submitButtonClick = () => {};
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
      />
      <MuAutoComplete
        label={registerTranslation.selectCity}
        options={mockData.cityOptions}
        value={selectedCity}
        onChange={cityChangeHandler}
      />
      <MuAutoComplete
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
        submitButtonClick={submitButtonClick}
      />
    </div>
  );
};

export default Register;
