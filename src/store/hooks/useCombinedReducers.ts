import {useReducer} from 'react';
import counterReducer, {counterDefault} from '../reducers/count';

const useCombinedReducers = () => {
  const [counterStore, counter] = useReducer(counterReducer, counterDefault);

  return {
    store: {...counterStore},
    reducers: [counter],
  };
};

export default useCombinedReducers;
