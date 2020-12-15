import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
// Styles
import '../../sass/components/totop.scss';

const ToTop = () => {
  const toTopBtn = useRef(null);

  useEffect(() => {
    const btn = toTopBtn.current;
    const classHandler = () => {
      if (window.scrollY >= 100) {
        btn.classList.add('add');
        setTimeout(() => {
          btn.classList.add('show');
        }, 0);
      } else {
        btn.classList.remove('show');
        btn.classList.remove('add');
      }
    };

    document.addEventListener('scroll', classHandler);
  }, []);
  const scrollToTop = e => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <Link to="/" id="totop" ref={toTopBtn} onClick={scrollToTop} />;
};
export default ToTop;
