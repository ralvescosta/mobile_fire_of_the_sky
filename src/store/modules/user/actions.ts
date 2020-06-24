import {UserTypes, User, UserRequestInput} from './types';

export const fetchGitUserRequest = (payload: UserRequestInput) => {
  return {
    type: UserTypes.FETCH_GIT_USER_REQUEST,
    payload,
  };
};

export const fetchGitUserSuccess = (payload: User) => {
  return {
    type: UserTypes.FETCH_GIT_USER_SUCCESS,
    payload,
  };
};

export const fetchGitUserFailure = () => {
  return {
    type: UserTypes.FETCH_GIT_USER_FAILURE,
  };
};
