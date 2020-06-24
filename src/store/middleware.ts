import {DECREMENT, decrementAction} from './reducers/count';

export default (action: any) => (dispatch: Function) => {
  if (action.type === DECREMENT) {
    dispatch(decrementAction());
  }

  dispatch(action);
};
