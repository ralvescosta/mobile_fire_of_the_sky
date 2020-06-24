import {UserState, UserTypes} from './types';
import {Reducer} from 'redux';

const INITIAL_STATE: UserState = {
  user: {},
  error: false,
  loading: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.FETCH_GIT_USER_REQUEST:
      return {...state, loading: true};
    case UserTypes.FETCH_GIT_USER_SUCCESS:
      return {...state, loading: false, error: false, user: action.payload};
    case UserTypes.FETCH_GIT_USER_FAILURE:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};

export default reducer;
