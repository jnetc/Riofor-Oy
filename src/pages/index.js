import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

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

  <Layout>
    <SEO lang="fi-FI" meta={helmet.meta} modal={data?.modal.active} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>;
};

export default IndexPage;
