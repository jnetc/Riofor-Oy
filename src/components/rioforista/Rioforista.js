import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/rioforista.scss';

import Image from './Image';

const Rioforista = () => {
  const { contentfulRioforista } = useStaticQuery(query);
  return (
    <section id="rioforista">
      <div className="rioforista">
        <h2>{contentfulRioforista.title}</h2>
        <div
          className="rich-txt"
          dangerouslySetInnerHTML={{
            __html: contentfulRioforista.content.childMarkdownRemark.html,
          }}></div>
      </div>
      <Image />
    </section>
  );
};

export default Rioforista;

const query = graphql`
  query {
    contentfulRioforista {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
