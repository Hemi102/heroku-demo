import React from 'react';
import {Navigate} from 'react-router-dom';
import Layout from 'components/layout';

const Protected = ({isLoggedIn, children}) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Layout>{children}</Layout>;
};

export default Protected;
