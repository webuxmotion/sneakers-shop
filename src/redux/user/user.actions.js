import UserActionTypes from './user.types';

export const setCurrentUser = item => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: item
});

export const logout = () => ({
  type: UserActionTypes.LOGOUT,
});
