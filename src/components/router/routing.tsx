import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../dashboard';
import ProdPage from '../prodPage';

const NotFound = () => {
  return <div>Whoops, seems that something is missing!</div>;
};

const RouterRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Navigate to='/dashboard' />} /> */}
      <Route path='/' element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/productpage/product/:id' element={<ProdPage />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default RouterRoutes;
