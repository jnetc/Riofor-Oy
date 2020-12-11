import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/footer.scss';

const Footer = () => {
  const { contentfulYhteystiedot } = useStaticQuery(query);
  const getPhone = contentfulYhteystiedot.phone;
  const lastPartOfNumber = getPhone.substring(3, getPhone.lenght);
  const firstPartOfNumber = getPhone.substring(1, 3);
  const year = new Date().getFullYear();
  return (
    <footer>
      <h3>{contentfulYhteystiedot.article}</h3>
      <p>{contentfulYhteystiedot.description}</p>
      <span>{`(+358) ${firstPartOfNumber} ${lastPartOfNumber}`}</span>
      <span>{contentfulYhteystiedot.email}</span>
      <hr />
      <p>Copyright © {year} Riofor-Muuraustyöt Oy</p>
    </footer>
  );
};

export default Footer;

const query = graphql`
  query {
    contentfulYhteystiedot {
      email
      phone
      article
      description
    }
  }
`;
