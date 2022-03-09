import { useReducer } from 'react';
import {
  emailValidation,
  englishCharacterValidation,
  numberOfLetters,
} from '../helpers/validationHelpers';
import { commonTranslation } from '../resources/translations';
import { InputAction, EmailState } from './dataModel';

const reducer = (state: EmailState, { type, payload }: InputAction) => {
  switch (type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        email: payload,
      };
    case 'BLUR':
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const initialState = {
  email: '',
  isTouched: false,
};

const useEmail = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_INPUT', payload: event.target.value });
  };

  const emailBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const { email, isTouched } = state;
  const isLettersValid = englishCharacterValidation(email);
  const hasEmailFormatError = !emailValidation(email) && isTouched;
  let emailHelperText = '';

  if (!isLettersValid) emailHelperText = commonTranslation.useEnglishWords;
  else if (numberOfLetters(email, 0) && isTouched)
    emailHelperText = commonTranslation.emailCannotBeEmpty;
  else if (hasEmailFormatError)
    emailHelperText = commonTranslation.emailFormatIsIncorrect;

  return {
    email,
    isTouched,
    isLettersValid,
    isEmailFormatValid: !hasEmailFormatError,
    emailHelperText,
    handleEmailChange,
    emailBlurHandler,
  };
};

export default useEmail;
