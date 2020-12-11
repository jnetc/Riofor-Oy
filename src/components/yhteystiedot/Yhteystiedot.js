import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/yhteystiedot.scss';

import Emailform from './Emailform';
import Image from './Image';

const Yhteystiedot = () => {
  const { contentfulYhteystiedot } = useStaticQuery(query);
  return (
    <section id="yhteystiedot">
      <h2>{contentfulYhteystiedot.title}</h2>
      <div
        className="rich-txt"
        dangerouslySetInnerHTML={{
          __html: contentfulYhteystiedot.content.childMarkdownRemark.html,
        }}
      />
      <Emailform />
      <Image />
    </section>
  );
};

export default Yhteystiedot;

const query = graphql`
  query {
    contentfulYhteystiedot {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
