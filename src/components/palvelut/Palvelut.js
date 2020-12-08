import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/palvelut.scss';

import Palvelu from './Palvelu';

const Palvelut = () => {
  const { allContentfulPalvelutBlog, contentfulPalvelut } = useStaticQuery(
    query
  );

  const palvelut = allContentfulPalvelutBlog.nodes.map(data => {
    return <Palvelu key={data.icon} data={data} />;
  });

  return (
    <section id="palvelut">
      <h2>{contentfulPalvelut.title}</h2>
      <div
        className="content rich-txt"
        dangerouslySetInnerHTML={{
          __html: contentfulPalvelut.content.childMarkdownRemark.html,
        }}></div>
      {palvelut}
    </section>
  );
};

export default Palvelut;

const query = graphql`
  query {
    allContentfulPalvelutBlog {
      nodes {
        icon
        title
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    contentfulPalvelut {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
