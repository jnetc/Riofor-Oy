import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../components/seo';
import Modal from '../components/projektit/Modal';
import Etusivu from '../components/etusivu';
import Palvelut from '../components/palvelut';
import Projektit from '../components/projektit';
import Rioforista from '../components/rioforista';
import Yhteystiedot from '../components/yhteystiedot';
import Footer from '../components/footer';
import ToTop from '../components/totop';
import ToCall from '../components/tocall';

import { useStore } from '../store/store';

const IndexPage = () => {
  const { contentfulSeo } = useStaticQuery(query);
  const data = useStore();
  const helmet = {
    meta: {
      title: contentfulSeo.title,
      description: contentfulSeo.description,
      url: 'https://riofor.com',
      image: 'https://riofor.com/images/og.png',
    },
  };

  return (
    <>
      <SEO
        meta={helmet.meta}
        modal={data?.modal.active}
        menu={data?.menu.active}
      />
      <ToTop />
      <ToCall />
      <Modal />
      <Etusivu />
      <Palvelut />
      <Projektit />
      <Rioforista />
      <Yhteystiedot />
      <Footer />
    </>
  );
};

export default IndexPage;

const query = graphql`
  query {
    contentfulSeo {
      title
      description
    }
  }
`;
