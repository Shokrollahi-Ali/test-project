import { constants } from '../configs/constants';

export const numberOfLetters = (
  userInput: string,
  numberOfLetters = constants.numberOfLetters
) => userInput?.trim().length === numberOfLetters;

export const englishCharacterValidation = (input: string) => {
  let regex = new RegExp(constants.regex.englishCharacters);
  return regex.test(input);
};

export const emailValidation = (email: string) => {
  let regex = new RegExp(constants.regex.email);
  return regex.test(email);
};
