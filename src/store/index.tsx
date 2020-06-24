import React from 'react';
import useCombinedReducers from './hooks/useCombinedReducers';
import {StoreContext} from './hooks/useStore';
import middleware from './middleware';

const Provider = ({children}: any) => {
  const {store, reducers} = useCombinedReducers();

  const triggerDispatchs = (action: any) => {
    for (let i = 0; i < reducers.length; i++) {
      reducers[i](action);
    }
  };

  const withMiddleware = (action: any) => {
    middleware(action)(triggerDispatchs);
  };

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch: withMiddleware,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
