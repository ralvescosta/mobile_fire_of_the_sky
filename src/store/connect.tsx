import React from 'react';
import {StoreContext} from './hooks/useStore';

const returnPropsAsDefault = (store: any, props: any) => props;

// function mapStateToProps(store, props) {
//   return {
//     ...store,
//     ...props
//   }
// }
const Connect = (mapStateToProps = returnPropsAsDefault) => (
  Component: React.FC,
) => {
  return function WrapConnect(props: any) {
    return (
      <StoreContext.Consumer>
        {({dispatch, store}) => {
          const storeProps = mapStateToProps(store, props);
          return <Component {...storeProps} dispatch={dispatch} />;
        }}
      </StoreContext.Consumer>
    );
  };
};

export default Connect;
