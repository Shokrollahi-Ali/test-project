export interface EmailState {
  email: string;
  isTouched: boolean;
}

export interface InputAction {
  type: string;
  payload?: any;
}

export interface InputState {
  value: string;
  isTouched: boolean;
}
