import { useReducer } from 'react';
import { InputAction, InputState } from './dataModel';

const reducer = (state: InputState, { type, payload }: InputAction) => {
  switch (type) {
    case 'INPUT':
      return { ...state, value: payload };
    case 'BLUR':
      return { ...state, isTouched: true };
    default:
      return state;
  }
};

const useInput = (
  initialValue: string,
  validateValue: (value: string) => boolean
) => {
  const [state, dispatch] = useReducer(reducer, {
    value: initialValue,
    isTouched: false,
  });
  const { value, isTouched } = state;
  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const hasError = !validateValue(value) && isTouched;
  return {
    value,
    isTouched,
    isValid: !hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
