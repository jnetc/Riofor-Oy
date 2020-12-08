import React from 'react';
import { Link } from 'gatsby';
// Styles
import '../../sass/components/etusivu.scss';
// Components
import Header from '../navigation';
import Image from './Image';
// Icon
import { Splash } from '../icons/Splash';
// import Email from '../icons/Email';

const Etusivu = () => {
  return (
    <section id="etusivu">
      <Header />
      <Splash />
      <div className="etusivu">
        <h1>Etsitkö muurareitä?</h1>
        <h2>
          Olemme perustaneet itsemme alan ammattilaisiksi ja meillä on laaja
          kokemus muurauksen rakentamisesta.
        </h2>
        <div className="etusivu-btns">
          <Link to="#yhteystiedot" className="btn fill">
            Pyydä tarjous
          </Link>
          <Link to="#projektit" className="btn line icon-none">
            Työn alla
          </Link>
        </div>
      </div>
      <div id="scroll-icon" />
      <Image />
    </section>
  );
};

export default Etusivu;
