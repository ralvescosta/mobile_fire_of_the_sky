import {useContext, createContext} from 'react';
import {counterDefault} from '../reducers/count';

export const defaultStore = {
  store: {...counterDefault},
  dispatch(_: any) {},
};

export const StoreContext = createContext(defaultStore);
export default () => {
  return useContext(StoreContext);
};
