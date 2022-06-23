import React from 'react';
import loaderStyles from './loader.module.css';

const Loader = () => {
  return (
    <>
      <div className={loaderStyles.loader}>
        <svg className={loaderStyles.circularLoader} viewBox='25 25 50 50'>
          <circle
            className={loaderStyles.pathLoader}
            cx='50'
            cy='50'
            r='20'
            fill='none'
          ></circle>
        </svg>
      </div>
    </>
  );
};

export default Loader;
