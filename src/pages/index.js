import React from 'react';

import SEO from '../components/seo';
import Modal from '../components/projektit/Modal';
import Etusivu from '../components/etusivu';
import Rakentamme from '../components/rakentamme';
import Projektit from '../components/projektit';
import Rioforista from '../components/rioforista';
import Yhteystiedot from '../components/yhteystiedot';

import { useStore } from '../store/store';

const IndexPage = () => {
  const data = useStore();
  const helmet = {
    meta: {
      title: 'Riofor-Muuraustyöt Oy | Ammatilaiset muurarit seudulla',
      descriprion:
        'Kattaviin palveluihimme kuuluvat muuraus- ja julkisivutyöt sekä muut muuraustyöt',
      url: 'https://cinemeye.com',
      image: 'https://cinemeye.com/images/og.png',
    },
  };
  return (
    <>
      <SEO
        meta={helmet.meta}
        modal={data?.modal.active}
        menu={data?.menu.active}
      />
      <Modal />
      <Etusivu />
      <Rakentamme />
      <Projektit />
      <Rioforista />
      <Yhteystiedot />
    </>
  );
};

export default IndexPage;
