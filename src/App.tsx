import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterRoutes from './components/router/routing';
// import Dashboard from './components/dashboard';

const App = () => {
  // return (
  //   <div>
  //     <Dashboard />;
  //   </div>
  // );
  // return <Routes />;
  return (
    <Router>
      <RouterRoutes />
    </Router>
  );
};

export default App;
