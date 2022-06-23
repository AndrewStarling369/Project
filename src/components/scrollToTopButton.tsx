import React, { useState, useEffect } from 'react';
import scrollToTopStyles from './scrollToTop.module.css';

const ScrollToTop = () => {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 250 ? setScrollUp(true) : setScrollUp(false);
    });
  }, []);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className={scrollToTopStyles.container}>
        {scrollUp && (
          <button className={scrollToTopStyles.button} onClick={scroll}>
            <p>^</p>
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToTop;
