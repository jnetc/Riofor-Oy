import React from 'react';
// Styles
import '../../sass/components/rioforista.scss';

import Image from './Image';

const Rioforista = () => {
  return (
    <section id="rioforista">
      <div className="rioforista">
        <h2>Rakennamme taloja, joissa haluat elää</h2>
        <p>
          Yhtiö on toimiensa aikana vaikuttanut merkittävästi nykyaikaisen
          pääkaupunkiseudun arkkitehtonisen ulkonäön muodostumiseen. Riofor
          Muuraustyöt Oy tarjoaa monien vuosien kokemuksensa, kertyneen
          tietämyksen ja nykyaikaisen teknologian soveltamisen ansiosta
          edullisimmat tarjoukset erilaisen monimutkaisuuden tiilitehtaiden
          alalla. Takaamme parhaan työn laadun, noudattamisen rakennusmääräykset
          ja -säännöt, rakentamisen aloittamisen vähimmäisaika ja työsuhteen ja
          sopimuksen mukaisten velvoitteiden määräaikojen tiukka noudattaminen.
          Kaikki muuraustyöt suoritetaan ammattitaitoisella henkilökunnalla,
          jolla on ammattitaso ja työkokemus.
        </p>
      </div>
      <Image />
    </section>
  );
};

export default Rioforista;
