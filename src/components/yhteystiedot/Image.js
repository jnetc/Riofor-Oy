import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "riofor-email" }) {
        publicURL
      }
    }
  `);
  return (
    <img
      src={data.file.publicURL}
      width="650"
      height="568"
      className="illustrations"
      loading="lazy"
      alt="email-form"
    />
  );
};

export default Image;
