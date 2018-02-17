import * as types from './types';

export function authenticate(isLoggedIn) {
  return {
    type: types.CHANGE_AUTH,
    payload: isLoggedIn
  };
}