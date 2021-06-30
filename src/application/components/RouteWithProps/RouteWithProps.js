import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithProps = ({ component: Component, data}, { ...rest }) => {
  return (
    <Route
      render={(props) => (
          <Component {...props} data={data} />
      )}
      {...rest}
    />
    );
};

export default RouteWithProps;