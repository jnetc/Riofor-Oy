import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }) {
        publicURL
      }
    }
  `);

  return (
    <Link id="logo" to="/">
      <img width="128" height="30" src={data.file.publicURL} alt="logo" />
    </Link>
  );
};

export default Logo;
