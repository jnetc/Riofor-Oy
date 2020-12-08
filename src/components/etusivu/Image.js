import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "riofor" }) {
        publicURL
      }
    }
  `);
  return (
    <img
      src={data.file.publicURL}
      width="650"
      height="664"
      className="illustrations"
      loading="lazy"
      alt="riofor"
    />
  );
};

export default Image;
