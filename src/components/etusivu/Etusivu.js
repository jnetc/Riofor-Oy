import React from 'react';
import { Link } from 'gatsby';
// Styles
import '../../sass/components/etusivu.scss';
// Components
// import { SplashSmall, SplashRight } from '../img/splashes';
import Header from '../navigation';
import Image from './Image';
import { Splash } from '../icons/Splash';
// import Email from '../icons/Email';

const Etusivu = () => {
  return (
    <section id="etusivu">
      <Header />
      <Splash />
      <div className="etusivu">
        {/* <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" /> */}
        {/* <div className="cube">
      </div> */}
        <h1>Etsitkö muurareitä?</h1>
        <h3>
          Olemme perustaneet itsemme alan ammattilaisiksi ja meillä on laaja
          kokemus muurauksen rakentamisesta.
        </h3>
        <div className="etusivu-btns">
          <Link to="#projektit" className="btn fill">
            Pyydä tarjous
          </Link>
          <Link to="#projektit" className="btn line icon-none">
            Työn alla
          </Link>
          {/* <button className="btn line icon-email">
            <Email />
          </button> */}
        </div>
      </div>
      <div id="scroll-icon" />
      <Image />
    </section>
  );
};

export default Etusivu;
